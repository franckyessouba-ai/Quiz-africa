import fs from 'fs';
import path from 'path';
import { QuizQuestion, LocalizedText } from '../src/types/quiz';
import { generateBalancedTargetSequence, reorderQuestionOptions } from '../src/utils/questionShuffle';

function esc(s: string): string {
  return (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function serializeQuestion(q: QuizQuestion): string {
  const isNews = q.isNews ? `\n    isNews: true,` : '';
  const newsDate = q.newsDate ? `\n    newsDate: '${esc(q.newsDate)}',` : '';
  return `  {
    id: '${esc(q.id)}',
    countryCode: '${esc(q.countryCode)}',
    category: '${esc(q.category)}',
    difficulty: ${q.difficulty},${isNews}${newsDate}
    prompt: L('${esc(q.prompt.fr)}', '${esc(q.prompt.en)}', '${esc(q.prompt.es)}', '${esc(q.prompt.pt)}', '${esc(q.prompt.ar)}'),
    options: [
      L('${esc(q.options[0].fr)}', '${esc(q.options[0].en)}', '${esc(q.options[0].es)}', '${esc(q.options[0].pt)}', '${esc(q.options[0].ar)}'),
      L('${esc(q.options[1].fr)}', '${esc(q.options[1].en)}', '${esc(q.options[1].es)}', '${esc(q.options[1].pt)}', '${esc(q.options[1].ar)}'),
      L('${esc(q.options[2].fr)}', '${esc(q.options[2].en)}', '${esc(q.options[2].es)}', '${esc(q.options[2].pt)}', '${esc(q.options[2].ar)}'),
      L('${esc(q.options[3].fr)}', '${esc(q.options[3].en)}', '${esc(q.options[3].es)}', '${esc(q.options[3].pt)}', '${esc(q.options[3].ar)}'),
    ],
    correctIndex: ${q.correctIndex},
    explanation: L('${esc(q.explanation.fr)}', '${esc(q.explanation.en)}', '${esc(q.explanation.es)}', '${esc(q.explanation.pt)}', '${esc(q.explanation.ar)}'),
  },`;
}

function writeTsQuestionFile(
  filePath: string,
  exportName: string,
  questions: QuizQuestion[],
  comment = ''
) {
  let content = `import { QuizQuestion } from '../types/quiz';\nimport { L } from './countriesPart1';\n\n`;
  if (comment) {
    content += `${comment}\n`;
  }
  content += `export const ${exportName}: QuizQuestion[] = [\n`;
  for (const q of questions) {
    content += `${serializeQuestion(q)}\n`;
  }
  content += `];\n`;
  fs.writeFileSync(filePath, content, 'utf-8');
}

async function processFile(
  relPath: string,
  exportName: string,
  offset: number,
  comment = ''
) {
  const fullPath = path.resolve(relPath);
  const mod = await import(fullPath);
  const rawList: QuizQuestion[] = mod[exportName];
  if (!Array.isArray(rawList)) {
    console.error(`Export ${exportName} not found in ${relPath}`);
    return;
  }

  const targets = generateBalancedTargetSequence(rawList.length, offset);
  const balanced = rawList.map((q, idx) => {
    return reorderQuestionOptions(q, targets[idx], (idx + 1) * 11 + offset);
  });

  // Verify correctness:
  const counts = [0, 0, 0, 0];
  let hasAdjacentSame = false;
  let maxConsecutive = 1;
  let currentConsecutive = 1;

  for (let i = 0; i < balanced.length; i++) {
    const ci = balanced[i].correctIndex;
    counts[ci]++;
    if (i > 0) {
      if (ci === balanced[i - 1].correctIndex) {
        hasAdjacentSame = true;
        currentConsecutive++;
        if (currentConsecutive > maxConsecutive) maxConsecutive = currentConsecutive;
      } else {
        currentConsecutive = 1;
      }
    }
  }

  writeTsQuestionFile(fullPath, exportName, balanced, comment);
  console.log(
    `✅ Rebalanced ${path.basename(relPath)} (${exportName}): ${balanced.length} items. Distribution [A, B, C, D]:`,
    counts,
    `| Adjacent duplicates: ${hasAdjacentSame} | Max consecutive: ${maxConsecutive}`
  );
}

async function run() {
  console.log('=== STARTING COMPLETE QUESTION REBALANCING ===');

  const filesToProcess: { file: string; exportName: string; offset: number; comment?: string }[] = [
    // 5 DIASPORA PARTS (505 questions)
    { file: 'src/data/diasporaPart1.ts', exportName: 'DIASPORA_PART_1', offset: 0 },
    { file: 'src/data/diasporaPart2.ts', exportName: 'DIASPORA_PART_2', offset: 1 },
    { file: 'src/data/diasporaPart3.ts', exportName: 'DIASPORA_PART_3', offset: 2 },
    { file: 'src/data/diasporaPart4.ts', exportName: 'DIASPORA_PART_4', offset: 3 },
    { file: 'src/data/diasporaPart5.ts', exportName: 'DIASPORA_PART_5', offset: 1 },

    // PAN FOOTBALL
    { file: 'src/data/panFootball1.ts', exportName: 'PAN_FOOTBALL_1', offset: 0 },
    { file: 'src/data/panFootball2.ts', exportName: 'PAN_FOOTBALL_2', offset: 1 },
    { file: 'src/data/panFootball3.ts', exportName: 'PAN_FOOTBALL_3', offset: 2 },
    { file: 'src/data/panFootball4.ts', exportName: 'PAN_FOOTBALL_4', offset: 3 },

    // PAN CULTURE
    { file: 'src/data/panCulture1.ts', exportName: 'PAN_CULTURE_1', offset: 1 },
    { file: 'src/data/panCulture2.ts', exportName: 'PAN_CULTURE_2', offset: 2 },
    { file: 'src/data/panCulture3.ts', exportName: 'PAN_CULTURE_3', offset: 3 },
    { file: 'src/data/panCulture4.ts', exportName: 'PAN_CULTURE_4', offset: 0 },

    // PAN HISTORY
    { file: 'src/data/panHistory1.ts', exportName: 'PAN_HISTORY_1', offset: 2 },
    { file: 'src/data/panHistory2.ts', exportName: 'PAN_HISTORY_2', offset: 3 },
    { file: 'src/data/panHistory3.ts', exportName: 'PAN_HISTORY_3', offset: 0 },
    { file: 'src/data/panHistory4.ts', exportName: 'PAN_HISTORY_4', offset: 1 },

    // PAN GEOGRAPHY
    { file: 'src/data/panGeography1.ts', exportName: 'PAN_GEOGRAPHY_1', offset: 3 },
    { file: 'src/data/panGeography2.ts', exportName: 'PAN_GEOGRAPHY_2', offset: 0 },
    { file: 'src/data/panGeography3.ts', exportName: 'PAN_GEOGRAPHY_3', offset: 1 },
    { file: 'src/data/panGeography4.ts', exportName: 'PAN_GEOGRAPHY_4', offset: 2 },

    // AFRICAN NEWS
    { file: 'src/data/africanNewsQuestions.ts', exportName: 'AFRICAN_NEWS_QUESTIONS', offset: 1, comment: '// Curated 100% Africa current-affairs questions' },
  ];

  for (const item of filesToProcess) {
    await processFile(item.file, item.exportName, item.offset, item.comment);
  }

  // Also rebalance data/dailyNewsArchive.json if present
  const archivePath = path.resolve('data/dailyNewsArchive.json');
  if (fs.existsSync(archivePath)) {
    try {
      const raw = fs.readFileSync(archivePath, 'utf-8');
      const parsed = JSON.parse(raw);
      if (parsed && parsed.byDate) {
        let dateCount = 0;
        let qCount = 0;
        for (const [dKey, list] of Object.entries(parsed.byDate)) {
          if (Array.isArray(list)) {
            const targets = generateBalancedTargetSequence(list.length, (dateCount + 1) % 4);
            parsed.byDate[dKey] = list.map((q: QuizQuestion, idx: number) => {
              return reorderQuestionOptions(q, targets[idx], idx * 7 + dateCount);
            });
            dateCount++;
            qCount += list.length;
          }
        }
        fs.writeFileSync(archivePath, JSON.stringify(parsed, null, 2), 'utf-8');
        console.log(`✅ Rebalanced dailyNewsArchive.json (${dateCount} dates, ${qCount} questions).`);
      }
    } catch (e) {
      console.warn('Could not rebalance dailyNewsArchive.json:', e);
    }
  }

  console.log('=== COMPLETE QUESTION REBALANCING FINISHED ===');
}

run();

import fs from 'fs';
import path from 'path';

export interface QTuple {
  id: string;
  diff: 1 | 2 | 3 | 4;
  q: [string, string, string, string, string];
  c: [string, string, string, string, string];
  d: [
    [string, string, string, string, string],
    [string, string, string, string, string],
    [string, string, string, string, string]
  ];
  exp: [string, string, string, string, string];
}

function esc(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

export function writePartFile(filename: string, partExportName: string, items: QTuple[]) {
  const filePath = path.resolve('src/data', filename);
  let content = `import { QuizQuestion } from '../types/quiz';\nimport { L } from './countriesPart1';\n\n`;
  content += `export const ${partExportName}: QuizQuestion[] = [\n`;

  for (const item of items) {
    content += `  {\n`;
    content += `    id: '${item.id}',\n`;
    content += `    countryCode: 'AFRICA',\n`;
    content += `    category: 'diaspora',\n`;
    content += `    difficulty: ${item.diff},\n`;
    content += `    prompt: L('${esc(item.q[0])}', '${esc(item.q[1])}', '${esc(item.q[2])}', '${esc(item.q[3])}', '${esc(item.q[4])}'),\n`;
    content += `    options: [\n`;
    content += `      L('${esc(item.c[0])}', '${esc(item.c[1])}', '${esc(item.c[2])}', '${esc(item.c[3])}', '${esc(item.c[4])}'),\n`;
    content += `      L('${esc(item.d[0][0])}', '${esc(item.d[0][1])}', '${esc(item.d[0][2])}', '${esc(item.d[0][3])}', '${esc(item.d[0][4])}'),\n`;
    content += `      L('${esc(item.d[1][0])}', '${esc(item.d[1][1])}', '${esc(item.d[1][2])}', '${esc(item.d[1][3])}', '${esc(item.d[1][4])}'),\n`;
    content += `      L('${esc(item.d[2][0])}', '${esc(item.d[2][1])}', '${esc(item.d[2][2])}', '${esc(item.d[2][3])}', '${esc(item.d[2][4])}'),\n`;
    content += `    ],\n`;
    content += `    correctIndex: 0,\n`;
    content += `    explanation: L('${esc(item.exp[0])}', '${esc(item.exp[1])}', '${esc(item.exp[2])}', '${esc(item.exp[3])}', '${esc(item.exp[4])}'),\n`;
    content += `  },\n`;
  }

  content += `];\n`;
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Wrote ${items.length} questions to ${filename}`);
}

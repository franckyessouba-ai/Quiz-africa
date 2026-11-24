import fs from 'fs';
import path from 'path';

interface RawItem {
  id: string;
  diff: 1 | 2 | 3 | 4;
  q_fr: string;
  q_en: string;
  q_es: string;
  q_pt: string;
  q_ar: string;
  corr_fr: string;
  corr_en: string;
  corr_es: string;
  corr_pt: string;
  corr_ar: string;
  dist_fr: [string, string, string];
  dist_en: [string, string, string];
  dist_es: [string, string, string];
  dist_pt: [string, string, string];
  dist_ar: [string, string, string];
  exp_fr: string;
  exp_en: string;
  exp_es: string;
  exp_pt: string;
  exp_ar: string;
}

// Helper to escape string literals in code output
function esc(str: string): string {
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function renderFile(items: RawItem[], partName: string): string {
  let code = `import { QuizQuestion } from '../types/quiz';\nimport { L } from './countriesPart1';\n\n`;
  code += `export const ${partName}: QuizQuestion[] = [\n`;
  for (const item of items) {
    code += `  {\n`;
    code += `    id: '${item.id}',\n`;
    code += `    countryCode: 'AFRICA',\n`;
    code += `    category: 'diaspora',\n`;
    code += `    difficulty: ${item.diff},\n`;
    code += `    prompt: L(\n`;
    code += `      '${esc(item.q_fr)}',\n`;
    code += `      '${esc(item.q_en)}',\n`;
    code += `      '${esc(item.q_es)}',\n`;
    code += `      '${esc(item.q_pt)}',\n`;
    code += `      '${esc(item.q_ar)}'\n`;
    code += `    ),\n`;
    code += `    options: [\n`;
    code += `      L('${esc(item.corr_fr)}', '${esc(item.corr_en)}', '${esc(item.corr_es)}', '${esc(item.corr_pt)}', '${esc(item.corr_ar)}'),\n`;
    code += `      L('${esc(item.dist_fr[0])}', '${esc(item.dist_en[0])}', '${esc(item.dist_es[0])}', '${esc(item.dist_pt[0])}', '${esc(item.dist_ar[0])}'),\n`;
    code += `      L('${esc(item.dist_fr[1])}', '${esc(item.dist_en[1])}', '${esc(item.dist_es[1])}', '${esc(item.dist_pt[1])}', '${esc(item.dist_ar[1])}'),\n`;
    code += `      L('${esc(item.dist_fr[2])}', '${esc(item.dist_en[2])}', '${esc(item.dist_es[2])}', '${esc(item.dist_pt[2])}', '${esc(item.dist_ar[2])}'),\n`;
    code += `    ],\n`;
    code += `    correctIndex: 0,\n`;
    code += `    explanation: L(\n`;
    code += `      '${esc(item.exp_fr)}',\n`;
    code += `      '${esc(item.exp_en)}',\n`;
    code += `      '${esc(item.exp_es)}',\n`;
    code += `      '${esc(item.exp_pt)}',\n`;
    code += `      '${esc(item.exp_ar)}'\n`;
    code += `    ),\n`;
    code += `  },\n`;
  }
  code += `];\n`;
  return code;
}

// Build 505 unique and diverse questions
console.log('Building diaspora dataset...');

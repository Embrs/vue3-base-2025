import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    languageOptions: {
      parser: vueParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        templateTokenizer: {
          // template tokenizer for `<template lang="pug">`
          'pug': 'vue-eslint-parser-template-tokenizer-pug',
        }
      },
    },
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  {
    rules: {
      'no-undef': 'off',
      'dot-notation': 'off', // Object 不強制用 "."
      'no-console': 'off', // 可以使用 console
      quotes: ['error', 'single'], // 使用引號 double single
      'semi-style': ['error', 'last'], // 强制分号出现在句子末尾。
      'no-extra-semi': 'error', // 禁用不必要的分号。
      semi: ['error', 'always'], // 強制使用分號
      'no-empty-function': 'error', // 禁止空 function
      'no-unused-labels': 'error',
      'no-alert': 'off', // alert、confirm 和 prompt 禁止使用
      'arrow-parens': ['error', 'always'], // ()=>箭頭
      curly: 'off', // 可用 return 簡寫
      'vue/no-mutating-props': 'off', // change props
      'vue/multi-word-component-names': 'off', // 多單字的名字
       '@typescript-eslint/ban-ts-comment': 'off'
    }
  }
);

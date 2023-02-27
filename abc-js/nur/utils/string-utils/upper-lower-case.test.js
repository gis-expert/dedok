import { assertThrow, assertToBe } from "../../../../dependencies/asserts/assert.js";
import { describe, test } from "../../../../dependencies/tests/test.js";
import { lowerCase, upperCase } from "./upper-lower-case.js";

 describe('textCaseTests', () => {
   describe('upperCaseTests', () => {
     test('простой текст', () => {
       assertToBe(upperCase('h'), 'H');
       assertToBe(upperCase('hello'), 'HELLO');
       assertToBe(upperCase("hi terminator"), "HI TERMINATOR");
     });
     test('текст со знаками пунктуации', () => {
       assertToBe(upperCase("hi, i'm terminator"), "HI, I'M TERMINATOR");
       assertToBe(upperCase("+++--= terminator =--+++"), "+++--= TERMINATOR =--+++");
     });
     test('текст с цифрами и числами', () => {
       assertToBe(upperCase("hi, i'm terminator3"), "HI, I'M TERMINATOR3");
       assertToBe(upperCase("Part: 243"), "PART: 243");
     });
     test('текст с пробелами, табуляцией и переводом строки', () => {
       assertToBe(upperCase("  hi, i'm terminator3"), "  HI, I'M TERMINATOR3");
       assertToBe(upperCase("Part: 243\n"), "PART: 243\n");
       assertToBe(upperCase("\t to left"), "\t TO LEFT");
     });
     test('параметр обязателен и должен быть только строковым', () => {
       assertThrow(() => upperCase(), 'argument must be type of string');
       assertThrow(() => upperCase(true), 'argument must be type of string');
     });
   });

   describe('lowerCaseTests', () => {
     test('простой текст', () => {
       assertToBe(lowerCase('H'), 'h');
       assertToBe(lowerCase('HELLO'), 'hello');
       assertToBe(lowerCase("HI TERMINATOR"), "hi terminator");
     });
     test('текст со знаками пунктуации', () => {
       assertToBe(lowerCase("HI I'M TERMINATOR"), "hi i'm terminator");
       assertToBe(lowerCase("+++--= TERMINATOR =--+++"), "+++--= terminator =--+++");
     });
     test('текст с цифрами и числами', () => {
       assertToBe(lowerCase("HI I'M TERMINATOR3"), "hi i'm terminator3");
       assertToBe(lowerCase("PARt: 243"), "part: 243");
     });
     test('текст с пробелами, табуляцией и переводом строки', () => {
       assertToBe(lowerCase("  HI I'M TERMINATOR3"), "  hi i'm terminator3");
       assertToBe(lowerCase("PARt: 243\n"), "part: 243\n");
       assertToBe(lowerCase("\t TO LEFT"), "\t to left");
     });
     test('параметр обязателен и должен быть только строковым', () => {
       assertThrow(() => lowerCase(), 'argument must be type of string');
       assertThrow(() => lowerCase(true), 'argument must be type of string');
     });
   });
 });

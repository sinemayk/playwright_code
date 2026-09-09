import { test, expect } from '@playwright/test';
import { sensitiveHeaders } from 'node:http2';
import * as xlsx from "xlsx";

//belirttigimiz klasore gider ve excel dosyasinin tamamini bir butun olarak kodumuzun icine dahil eder
const workbook = xlsx.readFile("test-data/loginTestData.xlsx");

//exceldeki sheet leri array olarak verir, 0nci indekste ilk sayfa
const sheetName = workbook.SheetNames[0];

//koseli parantez icinde belirttigimiz tum sayfayi verir
const sheet = workbook.Sheets[sheetName];

const testData: any[] = xlsx.utils.sheet_to_json(sheet);

test('', async ({ page }) => {
    console.log(testData)
});

import { test, expect } from "@playwright/test";

test("Testing Digital Report", async ({ page }) => {
  // Set URL
  await page.goto("https://higo.id/annualreport2024");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Close" }).click();
  await page.getByRole("button", { name: "Download Full Report" }).click();

  // Fill Form Data
  await page.getByPlaceholder("First Name").nth(0).fill("test");
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("Last Name").nth(1).fill("aizar");
  await page.waitForTimeout(1000);

  // Tunggu dan isi Email
  await page.waitForSelector('input[placeholder="Email"]');
  await page.getByPlaceholder("Email").nth(1).fill("test@gmail.com");
  await page.waitForTimeout(1000);

  await page.waitForSelector('input[placeholder="Phone Number"]');
  await page.getByPlaceholder("Phone Number").nth(1).fill("0811111111");
  await page.waitForTimeout(1000);

  await page.getByPlaceholder("Company Name").nth(1).fill("test");
  await page.waitForTimeout(1000);

  await page.getByPlaceholder("Job Title").nth(1).fill("test");

  //pada bagian ini harusnya error dikarenakan ini adlaah human authenticator sehigga membuat proses pada line ini menjadi tidak bisa, tetapi logic untuk scriptnya sudah benar

  // jika tetap ingin melanjutkan testnya, dapat menekan secara manual pada bagian checkbox ini lalu lanjut menekan manual tombol submit, akkan tetapi saya rasa akan tetap error karena sistem mendeteksi ini sebagai BOT jadi hasil test selesai pada tahap ini
  await page.check('input[type="checkbox"]');
  await page.waitForTimeout(1000);

  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Submit" }).click();
});

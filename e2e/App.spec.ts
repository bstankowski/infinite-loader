import { test, expect } from "@playwright/test";

test.describe("Usage examples", () => {
    const titles = {
        sw: "Star Wars Characters",
        picsum: "Picsum Photos",
    };

    test("should enable SWAPI example by default", async ({ page }) => {
        await page.goto("/");

        const select = page.getByLabel("Example");
        await expect(select).toHaveValue("sw");

        await expect(page.getByRole("heading", { name: titles.sw })).toBeVisible();
        await expect(page.getByText("Luke Skywalker")).toBeVisible();
        await expect(page.getByText("Load next")).toBeVisible();
        await expect(page.getByRole("heading", { name: titles.picsum })).not.toBeVisible();
    });

    test("should load next page when user scrolls to the end", async ({ page }) => {
        await page.goto("/");

        await expect(page.getByRole("heading", { name: titles.sw })).toBeVisible();
        await expect(page.getByText("Loading…")).not.toBeVisible();
        await page.evaluate(async () => {
            // Simply calling window.scrollTo(0, document.body.scrollHeight)
            // doesn't seem to be caught by intersection observer
            for (let i = 0; i < document.body.scrollHeight; i += 200) {
                window.scrollTo(0, i);
                await new Promise((resolve) => setTimeout(resolve, 50));
            }
        });
        await expect(page.getByText("Loading…")).toBeVisible();
    });

    test("should enable Picsum example when user selects it in the dropdown", async ({ page }) => {
        await page.goto("/");

        const select = page.getByLabel("Example");
        await select.selectOption("picsum");

        // Select Picsum example
        await expect(select).toHaveValue("picsum");
        await expect(page.getByRole("heading", { name: titles.sw })).not.toBeVisible();
        await expect(page.getByRole("heading", { name: titles.picsum })).toBeVisible();
    });
});

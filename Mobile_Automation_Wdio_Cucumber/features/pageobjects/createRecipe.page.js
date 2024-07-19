const { $, driver, browser } = require('@wdio/globals')
const data = require("../../Data/data.json");
const { assert, expect } = require('chai');
require('dotenv').config();

class Recipe {
    locators = {
        android: {
            calender: '//android.widget.Button[@content-desc="Meal Plan"]',
            plan: '(//android.view.View/android.widget.Button[@package="com.sidechef.sidechef"])[10]',
            week: '(//android.widget.TextView)[3][text(),"This Week"]',
            cart: '(//android.widget.Button)[7][text(),"ADD ALL TO CART"]',
            addicon: "//android.widget.Button[@content-desc='Add']",
            createRecipeBtn: "//android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView",
            createRecipeText: "//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]",
            recipeTitle: "//android.widget.EditText[@content-desc='recipeNameInput']",
            serviceSize: "//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup",
            sizeValue: "//android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[5]",
            ingredients: "//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView",
            searchIngre: '//android.widget.EditText[@content-desc="ingredientTextInput"]',
            ingredient2: "//android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]",
            ingredient3: "//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]",
            cheese: "//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText",
            parmesan: "//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText",
            breadcrumbs: "//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText",
            clickOnIngre: "//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText",
            ingreQuant: "//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Spinner/android.widget.TextView",
            ingreQuantVal: "//android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[5]",
            saveIngre: "//android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup",
            cookingInstructions: "(//android.widget.TextView)[8]",
            instructions: "//android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[6]/android.widget.EditText",
            doneBtn: "(//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup)[3]",
        }
    };
    //Cooking Instructions (Optional)
    platform() {
        return driver.isAndroid ? 'android' : 'ios';
    }
    get calender() {
        return $(this.locators[this.platform()].calender)
    }
    get myplan() {
        return $(this.locators[this.platform()].plan)
    }
    get thisweek() {
        return $(this.locators[this.platform()].week)
    }
    get addcart() {
        return $(this.locators[this.platform()].cart)
    }
    get addIconbtn() {
        return $(this.locators[this.platform()].addicon)
    }
    get createRecBtn() {
        return $(this.locators[this.platform()].createRecipeBtn)
    }
    get createRecText() {
        return $(this.locators[this.platform()].createRecipeText)
    }
    get recipeTitle() {
        return $(this.locators[this.platform()].recipeTitle)
    }
    get serviceSize() {
        return $(this.locators[this.platform()].serviceSize)
    }
    get sizeValue() {
        return $(this.locators[this.platform()].sizeValue)
    }
    get ingredientsBtn() {
        return $(this.locators[this.platform()].ingredients)
    }
    get searchIngredients() {
        return $(this.locators[this.platform()].searchIngre)
    }
    get clickOnIngre() {
        return $(this.locators[this.platform()].clickOnIngre)
    }
    get ingreQuant() {
        return $(this.locators[this.platform()].ingreQuant)
    }
    get ingreQuantVal() {
        return $(this.locators[this.platform()].ingreQuantVal)
    }
    get cheese() {
        return $(this.locators[this.platform()].cheese)
    }
    get parmesan(){
        return $(this.locators[this.platform()].parmesan)
    }
    get breadcrumbs() {
        return $(this.locators[this.platform()].breadcrumbs)
    }
    get saveIngre() {
        return $(this.locators[this.platform()].saveIngre)
    }
    get doneBtn() {
        return $(this.locators[this.platform()].doneBtn)
    }
    get instructions() {
        return $(this.locators[this.platform()].instructions)
    }
    get ingredient2() {
        return $(this.locators[this.platform()].ingredient2)
    }
    get ingredient3() {
        return $(this.locators[this.platform()].ingredient3)
    }
    get cookingInstructions() {
        return $(this.locators[this.platform()].cookingInstructions)
    }

    async addRecipe() {
        expect(await this.addIconbtn.isDisplayed()).to.be.true;
        (await this.addIconbtn).click();
        await browser.pause(process.env.small_wait);
        expect(await this.createRecBtn.isDisplayed()).to.be.true;
        (await this.createRecBtn).click();
        await browser.pause(process.env.small_wait);
    }
    async Recipe_description() {
        expect(await this.createRecText.isDisplayed()).to.be.true;
        assert.equal(await this.createRecText.getText(), data.recipe.new_recipe, "text is valid");
        await browser.pause(process.env.small_wait);
        expect(await this.recipeTitle.isExisting()).to.be.true;
        (await this.recipeTitle).setValue(data.recipe.recipe_name);
        await browser.pause(process.env.small_wait);
        expect(await this.serviceSize.isDisplayed()).to.be.true;
        (await this.serviceSize).click();
        await browser.pause(process.env.small_wait);
        expect(await this.sizeValue.isDisplayed()).to.be.true;
        (await this.sizeValue).click();
        await browser.pause(process.env.small_wait);
    }
    async Recipe_Ingredients() {
        //for adding ingredients
        expect(await this.ingredientsBtn.isDisplayed()).to.be.true;
        (await this.ingredientsBtn).click();
        await browser.pause(process.env.small_wait);
        expect(await this.searchIngredients.isDisplayed()).to.be.true;
        (await this.searchIngredients).setValue(data.recipe.ingredient_1);
        await browser.pause(process.env.small_wait);
        expect(await this.clickOnIngre.isDisplayed()).to.be.true;
        (await this.clickOnIngre).click();
        expect(await this.ingreQuant.isDisplayed()).to.be.true;
        await this.ingreQuant.click();
        expect(await this.ingreQuantVal.isDisplayed()).to.be.true;
        await this.ingreQuantVal.click();
        expect(await this.saveIngre.isDisplayed()).to.be.true;
        await this.saveIngre.click();
        await browser.pause(process.env.small_wait);
        (await this.ingredient2).click();
        (await this.searchIngredients).setValue(data.recipe.ingredient_2);
        await browser.pause(process.env.small_wait);
        expect(await this.cheese.isDisplayed()).to.be.true;
        (await this.parmesan).click();
        await browser.pause(process.env.small_wait);
        await this.ingreQuant.click();
        await this.ingreQuantVal.click();
        await this.saveIngre.click();
        await browser.pause(process.env.small_wait);
        //scroll page
        await driver.touchAction
            ([
                // Define the coordinates for the swipe from bottom to top
                { action: "press", x: 190, y: 900 },
                { action: "wait", ms: 500 },
                { action: "moveTo", x: 190, y: 100 },
                "release",
            ]);
        await browser.pause(process.env.small_wait);
        expect(await this.cookingInstructions.isDisplayed()).to.be.true;
    }
}
module.exports = new Recipe();
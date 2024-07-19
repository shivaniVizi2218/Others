const { $, driver, browser } = require("@wdio/globals");
const { assert } = require("chai");
const { expect } = require("chai");

require("dotenv").config();
const data = require("../../Data/data.json");

class homePage {
  //scenario-1
  locators = {
    android: {
      gotIt: '(//android.widget.FrameLayout)[10][text(),"GOT IT"]',
      popUpText:
        '(//android.widget.FrameLayout)[10][text(),"Fresh New Layout!"]',

      homeIcon:
        '//android.widget.Button[@content-desc="For You"]/android.view.ViewGroup/android.view.ViewGroup',

      saveRecipe:
        '(//android.view.ViewGroup[@content-desc="save"])[1]/android.view.ViewGroup',

      addCart: '(//android.view.ViewGroup[@resource-id="addToCart"])',
      cartLogo: '//android.view.ViewGroup[@content-desc="grocery"]',
      addItemsText: "//android.widget.TextView[@text='ADD YOUR OWN ITEMS']",
      optionsDots:
        '//android.view.ViewGroup[@content-desc="options"]/android.view.ViewGroup',

      moreOptions: "//android.widget.TextView[@text='More Options']",
      clearList: '(//android.view.ViewGroup[@resource-id="Clear List"])',
      shareIngredients:
        '(//android.widget.TextView)[29][text(),"Share Ingredient List"]',

      confirmationPOPText: "//android.widget.TextView[@text='Are You Sure?']",

      popYes: '(//android.widget.Button)[2][text(),"YES"]',
      backarrow:
        '//android.view.ViewGroup[@content-desc="back"]/android.view.ViewGroup',

      saveLogo: '//android.view.ViewGroup[@content-desc="saved"]',
      homePageText:
        '//android.widget.TextView[@content-desc="Daily Inspiration"]',

      mySavedRecipeText: "//android.widget.TextView[@text='My Saved Recipes']",

      //search
      searchIcon:
        '//android.widget.Button[@content-desc="Search"]/android.view.ViewGroup/android.view.ViewGroup',
      seachByIngredientsText:
        '//android.widget.TextView[@text="Search by Ingredients"]',
      viewallLink: '//android.view.ViewGroup[@resource-id="view-all"]',
      ingredientone: "(//android.widget.ImageView)[1]",
      ingredientTwo: "(//android.widget.ImageView)[3]",
      ingredientThree: "(//android.widget.ImageView)[5]",
      ingredientFour: "(//android.widget.ImageView)[7]",
      ingredientFive: "(//android.widget.ImageView)[9]",
      ingredientSix: "(//android.widget.ImageView)[11]",
      ingredientSeven: "(//android.widget.ImageView)[12]",
      ingredientEight: "(//android.widget.ImageView)[13]",
      ingredientNine: "(//android.widget.ImageView)[14]",
      ingredientTen: "(//android.widget.ImageView)[15]",
      ingredientEleven: "(//android.widget.ImageView)[16]",
      ingredientTwelve: "(//android.widget.ImageView)[17]",
      searchButton:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]",
    //pantry
    clickPantry:
        "//android.widget.Button[@content-desc='My Pantry']/android.view.ViewGroup/android.view.ViewGroup",
      welcomeAlert:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Image",
      addIngredents:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[3]/android.widget.Button",
      appleImage:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[7]/android.view.View/android.widget.Image[1]",
      avacado: "",
      datesImg:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[5]/android.view.View/android.widget.Image[1]",
      cherryImg:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[4]/android.view.View/android.widget.Image[1]",

      vegtables:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View[1]/android.view.View",
      vegAragula:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View[1]/android.view.View",
      dairyeggsBtn:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[2]/android.view.View[2]/android.widget.Button[3]",
      cotijacheese:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[6]/android.view.View/android.widget.Image[1]",
      creamcheese:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[9]/android.view.View/android.widget.Image[1]",
      confirmselectionBtn:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[4]/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[11]/android.view.View/android.widget.Image[1]",
      recipeIdeaBtn:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[1]/android.widget.TabWidget/android.view.View/android.view.View/android.view.View[2]/android.view.View",
      recipe_breakfastBtn:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.widget.Button[2]",
      recipe_boiledeggImg:
        "//android.view.View[@content-desc='cover 5min avatar Perfect Instant Pot Soft Boiled Eggs']/android.view.View/android.widget.TextView[1]",
      recipe_addtoplan:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView",
      recipe_monday:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.Button[1]",
      recipe_continue:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.Button[8]",
      recipe_eathealthyPlan:
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.Button[3]",
        calender: '//android.widget.Button[@content-desc="Meal Plan"]',
        plan: '(//android.view.View/android.widget.Button[@package="com.sidechef.sidechef"])[10]',
        week: '(//android.widget.TextView)[3][text(),"This Week"]',
        cart: '(//android.widget.Button)[7][text(),"ADD ALL TO CART"]',
        addicon:"//android.widget.Button[@content-desc='Add']",
        createRecipeBtn:"//android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView",
        createRecipeText:"//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]",
        recipeTitle:"//android.widget.EditText[@content-desc='recipeNameInput']",
        serviceSize:"//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup", 
        sizeValue:"//android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[5]",
        ingredients:"//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView",
        searchIngre:'//android.widget.EditText[@content-desc="ingredientTextInput"]',
       ingredient2:"//android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]",
       ingredient3:"//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]", 
       cheese:"//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText",
        parmesan:"//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText",
        breadcrumbs:"//android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText",
        clickOnIngre:"//android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText",
        ingreQuant:"//android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.Spinner/android.widget.TextView",
        ingreQuantVal:"//android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[5]",
        saveIngre:"//android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.view.ViewGroup",  
      },

  };
  platform() {
    return driver.isAndroid ? "android" : "ios";
  }
  //scenario-1
  get gotIt_popup() {
    return $(this.locators[this.platform()].gotIt);
  }

  get popUp_Text() {
    return $(this.locators[this.platform()].popUpText);
  }

  get home_Icon() {
    return $(this.locators[this.platform()].homeIcon);
  }
  get recipe_Image() {
    return $(this.locators[this.platform()].recipeImage);
  }
  get recipe_Name() {
    return $(this.locators[this.platform()].recipeName);
  }
  get saveRecipe() {
    return $(this.locators[this.platform()].saveRecipe);
  }

  get addCart_button() {
    return $(this.locators[this.platform()].addCart);
  }
  get cart_Logo() {
    return $(this.locators[this.platform()].cartLogo);
  }
  get addItems_Text() {
    return $(this.locators[this.platform()].addItemsText);
  }

  get groceries_Text() {
    return $(this.locators[this.platform()].groceriesText);
  }
  get cartRecipe_Name() {
    return $(this.locators[this.platform()].cartRecipeName);
  }
  get addOwn_Items() {
    return $(this.locators[this.platform()].addOwnItems);
  }
  get options_Dots() {
    return $(this.locators[this.platform()].optionsDots);
  }
  get moreOptions_text() {
    return $(this.locators[this.platform()].moreOptions);
  }
  get clearList_button() {
    return $(this.locators[this.platform()].clearList);
  }

  get popYes_option() {
    return $(this.locators[this.platform()].popYes);
  }
  get confirmationPOP_Text() {
    return $(this.locators[this.platform()].confirmationPOPText);
  }

  get back_arrow() {
    return $(this.locators[this.platform()].backarrow);
  }
  get save_Logo() {
    return $(this.locators[this.platform()].saveLogo);
  }
  get homePage_Text() {
    return $(this.locators[this.platform()].homePageText);
  }
  get mySavedRecipe_Text() {
    return $(this.locators[this.platform()].mySavedRecipeText);
  }
  //search
  get searchBtn() {
    return $(this.locators[this.platform()].searchIcon);
  }
  get seachByIngredients_Text() {
    return $(this.locators[this.platform()].seachByIngredientsText);
  }
  get search_Button() {
    return $(this.locators[this.platform()].searchButton);
  }
  get viewall_Link() {
    return $(this.locators[this.platform()].viewallLink);
  }
  get ingredient_one() {
    return $(this.locators[this.platform()].ingredientone);
  }
  get ingredient_Two() {
    return $(this.locators[this.platform()].ingredientTwo);
  }
  get ingredient_Three() {
    return $(this.locators[this.platform()].ingredientThree);
  }
  get ingredient_Four() {
    return $(this.locators[this.platform()].ingredientFour);
  }
  get ingredient_Five() {
    return $(this.locators[this.platform()].ingredientFive);
  }
  get ingredient_Six() {
    return $(this.locators[this.platform()].ingredientSix);
  }
  get ingredient_Seven() {
    return $(this.locators[this.platform()].ingredientSeven);
  }
  get ingredient_Eight() {
    return $(this.locators[this.platform()].ingredientEight);
  }
  get ingredient_Nine() {
    return $(this.locators[this.platform()].ingredientNine);
  }
  get ingredient_Ten() {
    return $(this.locators[this.platform()].ingredientTen);
  }
  get ingredient_Eleven() {
    return $(this.locators[this.platform()].ingredientEleven);
  }

  //pantry
  get getpantry() {
    return $(this.locators[this.platform()].clickPantry);
  }
  get welcomeAlert() {
    return $(this.locators[this.platform()].welcomeAlert);
  }
  get addIngredentsBtn() {
    return $(this.locators[this.platform()].addIngredents);
  }
  get dates() {
    return $(this.locators[this.platform()].datesImg);
  }
  get cherry() {
    return $(this.locators[this.platform()].cherryImg);
  }
  get dairyeggsBtn() {
    return $(this.locators[this.platform()].dairyeggsBtn);
  }
  get cotijacheeseImg() {
    return $(this.locators[this.platform()].cotijacheese);
  }
  get creamcheeseImg() {
    return $(this.locators[this.platform()].creamcheese);
  }
  get confirmSelection() {
    return $(this.locators[this.platform()].confirmselectionBtn);
  }
  get recipeIdea() {
    return $(this.locators[this.platform()].recipeIdeaBtn);
  }
  get recipe_breakfast() {
    return $(this.locators[this.platform()].recipe_breakfastBtn);
  }
  get recipe_boiledegg() {
    return $(this.locators[this.platform()].recipe_boiledeggImg);
  }
//plan
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
get addIconbtn(){
  return $(this.locators[this.platform()].addicon)
}
get createRecBtn(){
  return $(this.locators[this.platform()].createRecipeBtn)
}
get createRecText(){
  return $(this.locators[this.platform()].createRecipeText)
}
get recipeTitle(){
  return $(this.locators[this.platform()].recipeTitle)
}
get serviceSize(){
  return $(this.locators[this.platform()].serviceSize)
}
get sizeValue(){
  return $(this.locators[this.platform()].sizeValue)
}
get ingredientsBtn(){
  return $(this.locators[this.platform()].ingredients)
}
get searchIngredients(){
 return $(this.locators[this.platform()].searchIngre)
}
get clickOnIngre(){
  return $(this.locators[this.platform()].clickOnIngre)
}
get ingreQuant(){
  return $(this.locators[this.platform()].ingreQuant)
}
get ingreQuantVal(){
  return $(this.locators[this.platform()].ingreQuantVal)
}
get cheese(){
  return $(this.locators[this.platform()].cheese)
}
get breadcrumbs(){
  return $(this.locators[this.platform()].breadcrumbs)
}
get saveIngre(){
return $(this.locators[this.platform()].saveIngre)
}

get instructions(){
return $(this.locators[this.platform()].instructions)
}
get ingredient2(){
return $(this.locators[this.platform()].ingredient2)
}
get ingredient3(){
return $(this.locators[this.platform()].ingredient3)
}
  //function for landing page popup
  async verifyingPopUp() {
    await browser.pause(process.env.small_wait);
    (await this.gotIt_popup).waitForDisplayed();
    expect(await this.gotIt_popup.isDisplayed()).to.be.true;

    assert.include(
      await this.popUp_Text.getText(),
      [data.sideChefData_homePage.popUp_Text],
      "popup text is visible"
    );
  }
  //function for closing landing page popup
  async closingPopup() {
    await browser.pause(process.env.small_wait);
    await this.gotIt_popup.click();
  }
  //function for clicking home logo
  async clicking_homeLogo() {
    await browser.pause(process.env.small_wait);
    await this.home_Icon.click();
  }
  //function for home page main text
  async verifying_homeNavigatingPage() {
     assert.equal(await this.homePage_Text.getText(), [
      data.sideChefData_homePage.inspiration_text,
    ]);
  }
  //function for saving and add to cart buttons
  async clicking_addCartSave_button() {
    await browser.pause(process.env.small_wait);
    await this.saveRecipe.click();
    await browser.pause(process.env.small_wait);
    await this.addCart_button.click();
  }
  async verifyingCartPage() {
    assert.equal(
      await this.addItems_Text.getText(),
      data.sideChefData_homePage.cartText,
      "verifying cart page"
    );
  }
  //function for clicking cart logo
  async clicking_cart_Logo() {
    await browser.pause(process.env.medium_wait);
    await this.cart_Logo.click();
    await browser.pause(process.env.small_wait);
  }
  //function for clicking right side dots options
  async clicking_options_Dots() {
    await browser.pause(process.env.small_wait);
    await this.options_Dots.click();
  }
  //function for validating more options POPup and text in the popup
  async moreOption_popup() {
    assert.include(
      await this.moreOptions_text.getText(),
      [data.sideChefData_homePage.moreOptions_text],
      "moreoptions text is visible"
    );

    await browser.pause(process.env.small_wait);
  }
  //function for clicking clear list option
  async clicking_clearList_button() {
    await browser.pause(process.env.small_wait);
    await this.clearList_button.click();
  }
  //function for validating conformation popup text
  async conformation_popupMessage() {
    await this.popYes_option.waitForDisplayed();
    expect(await this.popYes_option.isDisplayed()).to.be.true;
  }
  //function for clickng on yes option
  async clicking_popYes_option() {
    await browser.pause(process.env.small_wait);
    await this.popYes_option.click();
  }
  //function for clicking on back arrow
  async clicking_back_arrow() {
    await browser.pause(process.env.small_wait);
    await this.back_arrow.click();
  }
  //function for clicking on save logo
  async clicking_save_Logo() {
    await this.save_Logo.click();
    assert.include(
      await this.mySavedRecipe_Text.getText(),
      [data.sideChefData_homePage.savedRecipe_text],
      "save recipe text is visible"
    );
    await browser.pause(process.env.small_wait);
  }
  async clickingSearchIcon() {
    (await this.searchBtn).click();
  }
  async verifyingText() {
    await browser.pause(process.env.small_wait);
    assert.include(
      await this.seachByIngredients_Text.getText(),
      data.sideChefData_SearchPage.searchPage_text,
      "search page text is visible"
    );
  }
  async selectingRecipies() {
    await this.viewall_Link.waitForDisplayed();
    expect(await this.viewall_Link.isDisplayed()).to.be.true;
    (await this.viewall_Link).click();
    await this.ingredient_one.waitForDisplayed();
    expect(await this.ingredient_one.isDisplayed()).to.be.true;
    (await this.ingredient_one).click();
    await this.ingredient_Two.waitForDisplayed();
    expect(await this.ingredient_Two.isDisplayed()).to.be.true;
    (await this.ingredient_Two).click();
    await this.ingredient_Three.waitForDisplayed();
    expect(await this.ingredient_Three.isDisplayed()).to.be.true;
    (await this.ingredient_Three).click();
    await this.ingredient_Four.waitForDisplayed();
    expect(await this.ingredient_Four.isDisplayed()).to.be.true;
    (await this.ingredient_Four).click();
    await this.ingredient_Five.waitForDisplayed();
    expect(await this.ingredient_Five.isDisplayed()).to.be.true;
    (await this.ingredient_Five).click();
    await this.ingredient_Six.waitForDisplayed();
    expect(await this.ingredient_Six.isDisplayed()).to.be.true;
    (await this.ingredient_Six).click();
    await this.ingredient_Seven.waitForDisplayed();
    expect(await this.ingredient_Seven.isDisplayed()).to.be.true;
    (await this.ingredient_Seven).click();
    await this.ingredient_Eight.waitForDisplayed();
    expect(await this.ingredient_Eight.isDisplayed()).to.be.true;
    (await this.ingredient_Eight).click();
    await this.ingredient_Nine.waitForDisplayed();
    expect(await this.ingredient_Nine.isDisplayed()).to.be.true;
    (await this.ingredient_Nine).click();
    await this.ingredient_Ten.waitForDisplayed();
    expect(await this.ingredient_Ten.isDisplayed()).to.be.true;
    (await this.ingredient_Ten).click();
    await this.ingredient_Eleven.waitForDisplayed();
    expect(await this.ingredient_Eleven.isDisplayed()).to.be.true;
    (await this.ingredient_Eleven).click();

    await this.search_Button.waitForDisplayed();
    expect(await this.search_Button.isDisplayed()).to.be.true;
    (await this.search_Button).click();
    await browser.pause(process.env.small_wait);
    await browser.back()
  }

  async invalidLogin() {
    await this.mailbtn.waitForDisplayed();
    expect(await this.mailbtn.isDisplayed()).to.be.true;
    await this.mailbtn.setValue(username);
    await browser.pause(5000);
    await browser.keys(["Tab"]);
    expect(await this.passwordbtn.isDisplayed()).to.be.true;
    await this.passwordbtn.setValue(password);
    await browser.pause(process.env.small_wait);
    expect(await this.startcookingbtn.isDisplayed()).to.be.true;
    await this.startcookingbtn.click();
    await browser.pause(process.env.small_wait);
    await this.gotitbtn.waitForDisplayed();
    expect(await this.gotitbtn.isDisplayed()).to.be.true;
    await this.gotitbtn.click();
  }

  async pantrypage() {
    await browser.pause(process.env.small_wait);
    (await this.getpantry).click();
    await browser.pause(process.env.small_wait);
    (await this.welcomeAlert).click();
    await browser.pause(process.env.small_wait);
    (await this.addIngredentsBtn).click();
    await browser.pause(process.env.small_wait);
    (await this.dates).click();
    (await this.cherry).click();
    (await this.dairyeggsBtn).click();
    await browser.pause(process.env.small_wait);
    (await this.cotijacheeseImg).click();
    (await this.creamcheeseImg).click();
    (await this.confirmSelection).click();
    await browser.pause(process.env.small_wait);
    (await this.recipeIdea).click();
    await browser.pause(process.env.small_wait);
    (await this.recipe_breakfast).click();
    await browser.back()
  }
  
}
module.exports = new homePage();

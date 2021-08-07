import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// we init with resources
const resources = {
  en: {
    translation: {
      productActive: "The product is live",
      columns: {
        name: "Name",
        ean: "EAN",
        type: "Type",
        weight: "Weight",
        quantity: "Quantity",
        price: "Price",
        color: "Color",
        active: "Active",
        actions: "Actions",
      },
      buttons: {
        view: "View",
        edit: "Edit",
        delete: "Delete",
        create: "Create",
        createFake: "CreateFake",
        update: "Update",
      },
      menu: {
        title: "Look at these menu options :o",
        products: "Products",
        create: "Create",
      },
      form: {
        name: "Product Name",
        ean: "European Article Number",
        type: "Type",
        weight: "Weight",
        quantity: "Quantity",
        price: "Price",
        color: "Color",
      },
      details: {
        productDetails: "Product Details",
        priceHistory: "Price History",
        QuantityHistory: "Quantity History",
      },
    },
  },
  lt: {
    translation: {
      productActive: "Produktas yra aktyvus",
      columns: {
        name: "Vardas",
        ean: "EAN",
        type: "Tipas",
        weight: "Svoris",
        quantity: "Kiekis",
        price: "Kaina",
        color: "Spalva",
        active: "Aktyvus",
        actions: "Veiksmai",
      },
      buttons: {
        view: "Peržiūrėti",
        edit: "Pakeisti",
        delete: "Trinti",
        create: "Sukurti",
        createFake: "Sukurti netikrą",
        update: "Pakeisti",
      },
      menu: {
        title: "Vau kokie meniu pasirinkimai :o",
        products: "Produktai",
        create: "Sukurti naują",
      },
      form: {
        name: "Produkto pavadinimas",
        ean: "EAN",
        type: "Tipas",
        weight: "Svoris",
        quantity: "Kiekus",
        price: "Kaina",
        color: "Spalva",
      },
      details: {
        productDetails: "Produkto informacija",
        priceHistory: "Kainų istorija",
        quantityHistory: "Kiekio istorija",
      },
    },
  },
};

i18n
  .use(initReactI18next) // p
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
i18n.changeLanguage("en");

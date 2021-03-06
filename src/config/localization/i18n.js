import i18n from "i18next";
import { initReactI18next } from "react-i18next";

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
        details: "Detalės",
        productDetails: "Product Details",
        priceHistory: "Price History",
        quantityHistory: "Quantity History",
      },
      stock: {
        currently: "Currently ",
        instock: " in stock",
        outstock: "Out of Stock",
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
        details: "Detalės",
        productDetails: "Produkto informacija",
        priceHistory: "Kainų istorija",
        quantityHistory: "Kiekio istorija",
      },
      stock: {
        currently: "Dabar ",
        instock: " vietoje",
        outstock: "Neturime",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});
i18n.changeLanguage("en");

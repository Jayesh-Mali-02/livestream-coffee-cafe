import React from 'react';
import { IcCoffee, IcGlass, IcTea, IcBlender, IcSandwich, IcBowl, IcSalad, IcCake } from '../components/ui/Icons';

export const DRINKS = [
    {
        cat: "Hot Coffee", icon: <IcCoffee s={16} />, items: [
            { name: "Espresso", price: "₹150" },
            { name: "Americano", price: "₹190" },
            { name: "Cortado", price: "₹190" },
            { name: "Cappuccino", price: "₹210" },
            { name: "Latte", price: "₹210" },
            { name: "Flat White", price: "₹210" },
            { name: "Mocha", price: "₹240" },
        ]
    },
    {
        cat: "Iced Coffee", icon: <IcGlass s={16} />, items: [
            { name: "Iced Espresso", price: "₹160" },
            { name: "Iced Americano", price: "₹190" },
            { name: "Iced Cortado", price: "₹200" },
            { name: "Iced Cappuccino", price: "₹210" },
            { name: "Iced Latte", price: "₹220" },
            { name: "Vietnamese", price: "₹220" },
            { name: "Mazagran", price: "₹220" },
            { name: "Iced Mocha", price: "₹230" },
            { name: "Classic Cold Coffee", price: "₹240" },
            { name: "Espresso Tonic", price: "₹240" },
            { name: "Cold Brew (House Blend)", price: "₹220" },
            { name: "Cold Brew (Gin Barrel Aged)", price: "₹270" },
            { name: "Cold Brew Lemonade", price: "₹240" },
            { name: "Cold Brew Tonic (House Blend)", price: "₹240" },
            { name: "Cold Brew Tonic (Gin Barrel Aged)", price: "₹290" },
            { name: "Mazagran Tonic", price: "₹260" },
            { name: "Affogato", price: "₹260" },
        ]
    },
    {
        cat: "Signature Coffee Mocktails", icon: <IcBlender s={16} />, items: [
            { name: "Mary Jane", price: "₹270" },
            { name: "Balsamica", price: "₹270" },
            { name: "Cider Cold Brew", price: "₹270" },
            { name: "Almost Baileys", desc: "NEW", price: "₹280" },
            { name: "Iced Mint Mocha", price: "₹280" },
        ]
    },
    {
        cat: "Manual Brews", icon: <IcCoffee s={16} />, items: [
            { name: "V60 Pour Over", desc: "Hot or Iced", price: "₹220" },
            { name: "Aeropress", desc: "Hot or Iced", price: "₹220" },
            { name: "French Press", desc: "Hot or Iced", price: "₹220" },
        ]
    },
    {
        cat: "Hot Chocolate", icon: <IcTea s={16} />, items: [
            { name: "Signature Hot Chocolate", price: "₹260" },
            { name: "French Hot Chocolate", price: "₹270" },
            { name: "Belgian Hot Chocolate", price: "₹290" },
        ]
    },
    {
        cat: "Specialty Teas", icon: <IcTea s={16} />, items: [
            { name: "Sacred Space", price: "₹220" },
            { name: "Ruby Heaven", price: "₹220" },
            { name: "Soul Catcher", price: "₹220" },
            { name: "Lemon Honey Tea", price: "₹200" },
        ]
    },
    {
        cat: "Frappe", icon: <IcBlender s={16} />, items: [
            { name: "Classic", price: "₹220" },
            { name: "Hazelnut", price: "₹240" },
            { name: "Caramel", price: "₹240" },
            { name: "Mocha", price: "₹240" },
            { name: "Irish", desc: "NEW", price: "₹240" },
            { name: "Mocha Brownie", desc: "NEW", price: "₹300" },
            { name: "Biscoff", desc: "NEW", price: "₹300" },
        ]
    },
    {
        cat: "Shakes", icon: <IcBlender s={16} />, items: [
            { name: "Nutella", desc: "NEW", price: "₹340" },
            { name: "Mocha Black Forest", price: "₹340" },
            { name: "White Chocolate Raspberry", price: "₹360" },
        ]
    },
    {
        cat: "Mocktails", icon: <IcGlass s={16} />, items: [
            { name: "Iced Tea", desc: "Lemon / Peach / Hibiscus", price: "₹220" },
            { name: "Starlight", price: "₹230" },
            { name: "Mint Mojito", price: "₹230" },
            { name: "Raspberry Mandarin", desc: "NEW", price: "₹280" },
            { name: "Pina Colada", desc: "NEW", price: "₹280" },
        ]
    },
];

export const FOOD = [
    {
        cat: "All Day Breakfast", icon: <IcBowl s={16} />, items: [
            { name: "Breakfast Bagel", price: "₹280" },
            { name: "French Toast (Babka)", price: "₹320" },
            { name: "Burrata And Pesto Croissant", price: "₹360" },
            { name: "Smoothie Bowl", price: "₹380" },
        ]
    },
    {
        cat: "Toasts", icon: <IcSalad s={16} />, items: [
            { name: "Mushroom On Toast", price: "₹360" },
            { name: "Guac On Toast", price: "₹420" },
            { name: "Margherita Bagel", price: "₹320" },
        ]
    },
    {
        cat: "Sandwiches", icon: <IcSandwich s={16} />, items: [
            { name: "Cottage Cheese Katsu", price: "₹360" },
            { name: "Spicy Grilled Cheese", price: "₹380" },
            { name: "Tomato Basil & Cheese", price: "₹320" },
            { name: "Avo Croissant Sandwich", price: "₹340" },
            { name: "Hummus Sandwich", price: "₹340" },
        ]
    },
    {
        cat: "Appetizers", icon: <IcSalad s={16} />, items: [
            { name: "Jalapeños & Cheese Sliders", price: "₹240" },
            { name: "Fries — Truffle", price: "₹380" },
            { name: "Fries — Peri Peri", price: "₹340" },
            { name: "Nachos for Sure", price: "₹390" },
            { name: "Quesadilla", price: "₹320" },
            { name: "Risotto Arancini", price: "₹420" },
        ]
    },
    {
        cat: "Pasta", icon: <IcBowl s={16} />, items: [
            { name: "Spaghetti Aglio e Olio", price: "₹380" },
            { name: "OG Blush", price: "₹390" },
        ]
    },
    {
        cat: "Bowls", icon: <IcBowl s={16} />, items: [
            { name: "Mexican Rice Bowl", price: "₹490" },
            { name: "Paprika Paneer Bowl", price: "₹460" },
        ]
    },
    {
        cat: "Desserts", icon: <IcCake s={16} />, items: [
            { name: "Chocolate Brownie", desc: "Warm with ice cream", price: "₹229" },
        ]
    },
];

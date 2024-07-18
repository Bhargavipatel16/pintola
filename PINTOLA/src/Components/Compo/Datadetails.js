
let shopourbest = [
    {
        "id": 1,
        "title": "High Protein Peanut Butter",
        "oldp": 399,
        "variants": [
            {
                "vid": 1,
                "flavor": "Crunchy",
                "size": "510gm",
                "price": 379
            },
            {
                "vid": 2,
                "flavor": "Crunchy",
                "size": "1kg",
                "price": 711
            },
            {
                "vid": 3,
                "flavor": "Creamy",
                "size": "510gm",
                "price": 379
            },
            {
                "vid": 4,
                "flavor": "Creamy",
                "size": "510gm",
                "price": 711
            },
        ],
        "price": 379,
        "image": "https://pintola.in/cdn/shop/files/CRUNCHY_82a27824-77c1-4d5c-a045-332d9d922e60_400x.jpg?v=1709807077",

    },

    {
        "id": 2,
        "title": "All Natural Peanut Butter ",
        "oldp": 175,
        "variants": [
            {
                "vid": 1,
                "flavor": "Creamy",
                "size": "350gm",
                "price": 166,
            },
            {
                "vid": 2,
                "flavor": "Creamy",
                "size": "1kg",
                "price": 426,
            },
            {
                "vid": 3,
                "flavor": "Creamy",
                "size": "2.5kg",
                "price": 1021,
            },
            {
                "vid": 4,
                "flavor": "Crunchy",
                "size": "350gm",
                "price": 166,
            },
            {
                "vid": 5,
                "flavor": "Crunchy",
                "size": "1kg",
                "price": 426,
            },
            {
                "vid": 6,
                "flavor": "Crunchy",
                "size": "2.5kg",
                "price": 1021,
            },
            {
                "vid": 7,
                "flavor": "Extra Crunchy",
                "size": "350gm",
                "price": 166,
            },
            {
                "vid": 8,
                "flavor": "Extra Crunchy",
                "size": "1kg",
                "price": 426,
            },
            {
                "vid": 9,
                "flavor": "Extra Crunchy",
                "size": "2.5kg",
                "price": 1021,
            },
        ],
        "price": 166,
        "image": "https://pintola.in/cdn/shop/files/CREAMY_400x.jpg?v=1709806374",

    },

    {
        "id": 3,
        "title": "High Protein Dark Chocolate Otas",
        "oldp": 349,
        "variants": [
            {
                "vid": 1,
                "size": "400g",
                "price": 332,
            },
            {
                "vid": 2,
                "size": "1kg",
                "price": 664,
            },
        ],
        "price": 332,
        "image": "https://pintola.in/cdn/shop/files/FirstImageHPOatsForwebsite-400g_400x.jpg?v=1709186086",

    },

    {
        "id": 4,
        "title": "Organic Wholegrain Brown Rice Cakes",
        "oldp": 160,
        "variants": [
            {
                "vid": 1,
                "flavor": "Unsalted",
                "price": 152,
            },
            {
                "vid": 2,
                "flavor": "Salted",
                "price": 152,
            },
            {
                "vid": 3,
                "flavor": "Multigrain",
                "price": 152,
            },
            {
                "vid": 4,
                "flavor": "Multigrain Salted",
                "price": 152,
            },
        ],
        "price": 152,
        "image": "https://pintola.in/cdn/shop/products/Unsalted_400x.jpg?v=1670653747",

    },

]
shopourbest = shopourbest.map((items) => ({ ...items, quantity: 1 }))
console.log(shopourbest);







let newlylaunched = [
    {
        "id": 5,
        "title": "Dark Chocolate & Cranberry Muesli with 25% Millet",
        "oldp": 285,
        "variants": [
            {
                "vid": 1,
                "size":"350g",
                "price": 270,
            },
            {
                "vid": 2,
                "size":"800g",
                "price": 555,
            },
        ],
        "price": 270,
        "image": "https://pintola.in/cdn/shop/files/Muesli_ChocoBerryCrunch-350gm_600x600_bfff97d4-fadf-4c64-829d-904e0742893b_400x.jpg?v=1718364913",

    },

    {
        "id": 6,
        "title": "Fruit & Nut Muesli with 68% Whole Grains",
        "oldp": 295,
        "variants": [
            {
                "vid": 1,
                "size":"350g",
                "price": 280,
            },
            {
                "vid": 2,
                "size":"800g",
                "price": 569,
            },
        ],

        "price": 280,
        "image": "https://pintola.in/cdn/shop/files/Muesli_Fruit_N_Nut-350gm_600x600_9f511e1f-82a9-470a-88e7-6b0df97f8619_400x.jpg?v=1718364969",

    },

    {
        "id": 7,
        "title": "High Protein Dark Chocolate Oats",
        "oldp": 349,
        "variants": [
            {
                "vid": 1,
                "size":"400g",
                "price": 332,
            },
            {
                "vid": 2,
                "size":"1kg",
                "price": 664,
            },
        ],
        "price": 332,
        "image": "https://pintola.in/cdn/shop/files/HPOats-400gm_600x600_8b96b4b1-778c-4558-838a-2ecb2be789a6_400x.jpg?v=1719222911",

    },

    {
        "id": 8,
        "title": "Jumbo Rolled Oats",
        "oldp": 199,
        "variants": [
            {
                "vid": 1,
                "size":"400gm",
                "price": 189,
            },
            {
                "vid": 2,
                "size":"1kg",
                "price": 403,
            },
        ],
        "price": 189,
        "image": "https://pintola.in/cdn/shop/files/Jumbo_Rolled_Oats-400g_600x600_327d54b2-ffa1-45f2-85ac-cf2e8c946da0_400x.jpg?v=1718345327",

    },

    {
        "id": 9,
        "title": "Wholegrain & Seeds Muesli with 33% Millet ",
        "oldp": 285,
        "variants": [
            {
                "vid": 1,
                "size":"350g",
                "price": 270,
            },
            {
                "vid": 2,
                "size":"800g",
                "price": 555,
            },
        ],
        "price": 270,
        "image": "https://pintola.in/cdn/shop/files/Muesli_Whole_Grain_Seeds-350gm_600x600_05fdeae2-b6e8-42cd-b60b-5095a7060546_400x.jpg?v=1718365171",

    },
]
newlylaunched = newlylaunched.map((items) => ({ ...items, quantity: 1 }))
console.log(newlylaunched);

export { shopourbest, newlylaunched }

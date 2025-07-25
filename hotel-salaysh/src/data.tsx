type product = {
    id:number,
    title:string,
    price:number,
    desc:string,
    img?:string,
    options?:{
        title:string;
        additionalPrice:number }[];
};

type products = product[];

export const featuredProducts:products=[
    {
        id:1,
        title:"Thanos",
        price:40,
        desc:"Thanos rest in peace.Thanos rest in peace.Thanos rest in peace.Thanos rest in peace.",
        img:"/Thanos restin.png",
        options:[
            {
                title:"small",
                additionalPrice:0
            },
            {
                title:"medium",
                additionalPrice:5
            },
            {
                title:"large",
                additionalPrice:10
            }
        ]
    },
    {
        id:2,
        title:"Pizza",
        price:40,
        desc:"Have a nice time.Local Burger with smooth taste.Local Burger with smooth taste.Local Burger with smooth taste.",
        img:"/photo_2025-03-22_06-01-03.jpg",
        options:[
            {
                title:"small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:5
            },
            {
                title:"Large",
                additionalPrice:20
            }
        ]
        
    },
    {
        id:3,
        title:"Burger",
        price:45,
        desc:"Have a nice time here also.Have a nice time here also.Have a nice time here also.",
        img:"/photo_2025-03-29_22-34-34.jpg",
        options:[
            {
                title:"small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:5
            },
            {
                title:"Large",
                additionalPrice:10
            }
        ]
        
    },
    {
        id:4,
        title:"Ertib",
        price:20,
        desc:"Local Burger with smooth taste.Local Burger with smooth tasteLocal Burger with smooth taste",
        img:"/20250320_114518.jpg",
        options:[
            {
                title:"small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:5
            },
            {
                title:"Large",
                additionalPrice:10
            }
        ]
        
    }
];


export const pizzas: product[]=[
    {
        id:1,
        title:"Pizza",
        price:40,
        desc:"Have a nice time.Local Burger with smooth taste.Local Burger with smooth taste.Local Burger with smooth taste.",
        img:"/photo_2025-03-22_06-01-03.jpg",
        options:[
            {
                title:"small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:5
            },
            {
                title:"Large",
                additionalPrice:20
            }
        ]
        
    },
    {
        id:2,
        title:"Pizza",
        price:40,
        desc:"Have a nice time.Local Burger with smooth taste.Local Burger with smooth taste.Local Burger with smooth taste.",
        img:"/photo_2025-03-22_06-01-03.jpg",
        options:[
            {
                title:"small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:5
            },
            {
                title:"Large",
                additionalPrice:20
            }
        ]
        
    },
    {
        id:3,
        title:"Pizza",
        price:40,
        desc:"Have a nice time.Local Burger with smooth taste.Local Burger with smooth taste.Local Burger with smooth taste.",
        img:"/photo_2025-03-22_06-01-03.jpg",
        options:[
            {
                title:"small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:5
            },
            {
                title:"Large",
                additionalPrice:20
            }
        ]
        
    },
    {
        id:4,
        title:"Pizza",
        price:40,
        desc:"Have a nice time.Local Burger with smooth taste.Local Burger with smooth taste.Local Burger with smooth taste.",
        img:"/photo_2025-03-22_06-01-03.jpg",
        options:[
            {
                title:"small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:5
            },
            {
                title:"Large",
                additionalPrice:20
            }
        ]
        
    },
]

export const singleProduct:product={
    id:1,
    title:"Thanos",
    price:40.70,
    desc:"Thanos rest in peace.Thanos rest in peace.Thanos rest in peace.Thanos rest in peace.",
    img:"/Thanos restin.png",
    options:[
        {
            title:"small",
            additionalPrice:0
        },
        {
            title:"medium",
            additionalPrice:5
        },
        {
            title:"large",
            additionalPrice:10
        }
    ]
}
type Menu = {
    id:number;
    slug:string;
    title:string;
    desc?:string;
    img?:string;
    color:string;
    
}[];

export const menu:Menu=[
    {
        id:1,
        slug:"pasta",
        title:"Italian Pasta",
        desc:"Enjoy the meal as you are in Italy right now",
        img:"/Thanos restin.png",
        color:"green"
    },
    {
        id:2,
        slug:"kocho",
        title:"kaffa kocho",
        desc:"Enjoy the meal as you are in Bonga Kaffa right now",
        img:"/Thanos restin.png",
        color:"blue"
    },
    {
        id:3,
        slug:"Godere",
        title:"Bench Godere",
        desc:"Enjoy the meal as you are in Mizan Aman right now",
        img:"/Thanos restin.png",
        color:"red"
    },
   
]


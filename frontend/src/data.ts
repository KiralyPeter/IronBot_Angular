import { Robot } from "./app/shared/models/Robot";
import { Tag } from "./app/shared/models/Tag";

export const sample_robots: Robot[] = [
    {
        id:'1',
        name:'Deflector',
        price: 15,
        tags:['Robot', 'Track', 'Deflector'],
        favorite:true,
        stars:5,
        imageUrl:'assets/robot-1.png',
        origins:['russia', 'asia']
    },
    {
        id:'2',
        name:'Kitchen',
        price: 12,
        tags:['Robot', 'Humanoid', 'Kitchen'],
        favorite:false,
        stars:4,
        imageUrl:'assets/robot-2.png',
        origins:['hungary', 'europa']
    },
    {
        id:'3',
        name:'Kitchen',
        price: 20,
        tags:['Robot', 'Worker', 'Kitchen'],
        favorite:true,
        stars:5,
        imageUrl:'assets/robot-3.png',
        origins:['japan', 'asia']
    },
    {
        id:'4',
        name:'Cleaner',
        price: 10,
        tags:['Robot', 'Worker', 'Cleaner'],
        favorite:false,
        stars:2,
        imageUrl:'assets/robot-4.png',
        origins:['japan', 'asia']
    },
    {
        id:'5',
        name:'Nutcracer',
        price: 10,
        tags:['Robot', 'Toy', 'Nutcracer'],
        favorite:false,
        stars:2,
        imageUrl:'assets/robot-5.png',
        origins:['japan', 'asia']
    },
    {
        id:'6',
        name:'IronHead',
        price: 10,
        tags:['Robot', 'Toy', 'IronHead'],
        favorite:false,
        stars:2,
        imageUrl:'assets/robot-6.png',
        origins:['japan', 'asia']
    },

]

export const sample_tags:Tag[] = [
    {name: 'All', count: 6},
    {name: 'Kitchen', count: 2},
    {name: 'Nutcracer', count: 1},
    {name: 'Deflector', count: 1},
    {name: 'Cleaner', count: 1},
    {name: 'IronHead', count: 1},   
]
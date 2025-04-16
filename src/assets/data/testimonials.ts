export interface Testimony {
    img: string;
    name: string;
    position: string;
    text: string;
}

interface Testimonials {
    title: string;
    description: string;
    entries: Testimony[];
}

export const testimonials: Testimonials = {
    title: 'Testimonials',
    description: 'See what our property managers, landlords, and tenants have to say',
    entries: [
        {
            img: 'images/av1.png',
            name: 'Mira Culos',
            position: 'Renter',
            text: '“Estatery is the platform I go to on almost a daily basis for 2nd home and vacation condo shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Estatery!”'
        },
        {
            img: 'images/av2.png',
            name: 'Mark Brown',
            position: 'Renter',
            text: '“I check Estatery almost every day — whether I\'m seriously house hunting or just daydreaming about future getaways. It makes exploring new locations and comparing properties incredibly easy and enjoyable.”'
        },
        {
            img: 'images/av3.png',
            name: 'Jake White',
            position: 'Renter',
            text: '“Estatery turns home shopping into a daily delight. Whether I\'m planning for the future or just exploring what\'s out there, I always find something exciting and new.”'
        },
    ]
}

interface Social {
    id: number;
    name: string;
    url: string;
    icon: string;
}

export const socials: Social[] = [
    {
        id: 1,
        name: "Facebook",
        url: "https://www.facebook.com/estatery",
        icon: "images/s-fb.svg"
    },
    {
        id: 2,
        name: "Twitter", 
        url: "https://www.twitter.com/estatery",
        icon: "images/s-t.svg"
    },
    {
        id: 3,
        name: "Instagram",
        url: "https://www.instagram.com/estatery",
        icon: "images/s-i.svg"
    },
    {
        id: 4,
        name: "LinkedIn",
        url: "https://www.linkedin.com/company/estatery",
        icon: "images/s-li.svg"
    }
]

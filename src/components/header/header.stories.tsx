import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const MainNav = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MainNav.args = {
  menus: {
    "mainMenu": {
        "itemsCollection": {
            "items": [
                {
                    "sys": {
                        "id": "6eQ8CnXsaeRHV9ga3QUOiE"
                    },
                    "title": "Academics",
                    "description": "Stevens Institute of Technology is a student-centric research university, with technology at its core. Our three schools and one college uniquely prepare students for bright futures in diverse fields including tech, finance, medicine, energy, engineering — even art and music.",
                    "slug": "academics",
                    "externalLink": null,
                    "page": null,
                    "children": {
                        "itemsCollection": {
                            "items": [
                                {
                                    "sys": {
                                        "id": "5GWGFgsQGDctV0Tyv3NHxb"
                                    },
                                    "title": "Academics at Stevens",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "3f2Q4epZokFZlUeeDqGJoo"
                                        },
                                        "__typename": "PageLanding",
                                        "slug": "academics-at-stevens"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "5qPeBkMfUXPpxGJfTgzxoX"
                                    },
                                    "title": "Find Your Program",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": "https://programs.stevens.edu/",
                                    "page": null,
                                    "children": null
                                },
                                {
                                    "sys": {
                                        "id": "3SY0lfD83GyCwI9Sfd6Teu"
                                    },
                                    "title": "Our Schools",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "ZqY0BQOzg0lIRVPi0rtvj"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "our-schools"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "5c3bouWFDXeXgvqPZSnAPQ"
                                    },
                                    "title": "Undergraduate Study",
                                    "description": null,
                                    "slug": "undergraduate-study",
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "4I4hWI39etGBtpq1uzdOw5"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "undergraduate-study"
                                    },
                                    "children": {
                                        "itemsCollection": {
                                            "items": [
                                                {
                                                    "sys": {
                                                        "id": "4jtqQOscg6ChfTPbcQRyRh"
                                                    },
                                                    "title": "Majors and Minors ",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "5WGczYawzA506S5L9YBcjM"
                                                        },
                                                        "__typename": "PageProgramListing",
                                                        "slug": "find-your-program"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "1PNOjcHiEfSTfDV1CZgGfa"
                                                    },
                                                    "title": "SUCCESS - The Stevens Core Curriculum",
                                                    "description": null,
                                                    "slug": "success-the-stevens-core-curriculum",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "2dwKBqI90pW6speUQKB6mQ"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "success-the-stevens-core-curriculum"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "ZNDYcQHOFPpZVnvC0YFPw"
                                                    },
                                                    "title": "The Foundations Program",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "78JpznJzUkfC38ne5EPGRM"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "the-first-year-experience"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "REMZ8UGY3EoK9mVw7DhX2"
                                                    },
                                                    "title": "Special Programs ",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "6EQvZKJkuCKBKwJ2AmpojD"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "special-programs"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "s6DUMohQ3lVBwbGlOsOmL"
                                                    },
                                                    "title": "Undergraduate Research",
                                                    "description": null,
                                                    "slug": "undergraduate-research",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "7BBp1QNV76hcCQmaIOp7Ji"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "undergraduate-research"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "gM4ztT2RZ5icaWaXc0BME"
                                                    },
                                                    "title": "Study Abroad ",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "5N8VpvTbjzl2SYVvk9CpIp"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "study-abroad"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "7nYzh7DjZg8E4Tf9uARkLx"
                                                    },
                                                    "title": "Academic Resources",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "1F2sIslwXcJRO5GYzYGnJz"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "academic-resources"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "1Jtc5l21iB74MesTJuqtpf"
                                    },
                                    "title": "Graduate Study",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "14uD8iPfRa5nMzHic62LHv"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "graduate-study"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "5d6S87vTAWdiwgtLDvhVQ0"
                                    },
                                    "title": "Stevens Online",
                                    "description": null,
                                    "slug": "stevensonline",
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "3quXTh4ZcBGzAymZJKCJa2"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "stevens-online"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "1QRjNSDSaYAro7eLe5KqFG"
                                    },
                                    "title": "Corporate Education",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "H9UGBMJ3ef9EjqMacG5Zz"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "graduate-corporate-education"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "6BdtEvQBNqHuVZ5oHLKu7k"
                                    },
                                    "title": "Samuel C. Williams Library",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": "https://library.stevens.edu/home",
                                    "page": null,
                                    "children": null
                                }
                            ]
                        }
                    }
                },
                {
                    "sys": {
                        "id": "19DnABcX8I5Il5kgbePLLW"
                    },
                    "title": "Discover Stevens",
                    "description": "Stevens is driven by the idea of building a better future through innovation and technology. Our hands-on experiences, industry-leading internships and cooperative learning opportunities establish a strong foundation for our students’ success.",
                    "slug": "discover-stevens",
                    "externalLink": null,
                    "page": null,
                    "children": {
                        "itemsCollection": {
                            "items": [
                                {
                                    "sys": {
                                        "id": "7FJpEMKagM9dNDNnIEcAZk"
                                    },
                                    "title": "The Innovation University",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "a4Mny2xepVAF9MnVpxm7a"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "driven-by-innovation"
                                    },
                                    "children": {
                                        "itemsCollection": {
                                            "items": [
                                                {
                                                    "sys": {
                                                        "id": "5Yah8QKO9rDPW4e72ZWZlv"
                                                    },
                                                    "title": "Our History",
                                                    "description": null,
                                                    "slug": "our-history",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "2uo370gN9Rx9ZbtKJg6olb"
                                                        },
                                                        "__typename": "PageMinisiteLanding",
                                                        "slug": "stevens-history"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "QZgoUV3X4Y7y3HgzAt1KC"
                                    },
                                    "title": "Leadership & Vision",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "3g0yU1T1XuVi8sp5jRmnai"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "leadership-and-vision"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "6EWCDJHkF4mjpnPBZpPEDG"
                                    },
                                    "title": "Strategic Plan",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "2IuUUqA61lZAVt3qt3Uokc"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "strategic-plan"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "3w0tpsQMezGZryRQtVVsTY"
                                    },
                                    "title": "Stevens By the Numbers",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "GyXSvbwYm3PfwEplKa61f"
                                        },
                                        "__typename": "PageLanding",
                                        "slug": "stevens-by-the-numbers"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "5tXuNa95ZrGU8GEo61QRzq"
                                    },
                                    "title": "Diversity, Equity and Inclusion",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "6baj7MEbGvib4K2SymgiN2"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "diversity-equity-inclusion"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "7vFPvmcFGCmuCJ5JToYnzs"
                                    },
                                    "title": "Sustainability",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "1SS2X1g9vlUPFU7tOqy6IJ"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "sustainability"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "7iXT1bxknobkN5hQM3BYBF"
                                    },
                                    "title": "News",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "5IX9vmUF09ewUK3nAPhghp"
                                        },
                                        "__typename": "PageNews",
                                        "slug": "news"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "3ZbsM1z2vfD9U2RQn5B4bg"
                                    },
                                    "title": "Events",
                                    "description": null,
                                    "slug": "events",
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "5A0ZGGGa3sbiH3285vVAQj"
                                        },
                                        "__typename": "PageEventsCalendar",
                                        "slug": "events"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "sys": {
                        "id": "6vD5WXFaWHPUitTyDfrX9K"
                    },
                    "title": "Student Life",
                    "description": "Our vibrant campus sits across the river from New York City, opening the door to endless opportunity and adventure. There’s never a dull moment on campus — with fraternities and sororities, clubs, athletics and arts, every student can pursue their passions beyond the classroom.",
                    "slug": "student-life",
                    "externalLink": null,
                    "page": null,
                    "children": {
                        "itemsCollection": {
                            "items": [
                                {
                                    "sys": {
                                        "id": "6poaxw6c4P0eWFCTgwKP00"
                                    },
                                    "title": "New Students",
                                    "description": null,
                                    "slug": "new-students",
                                    "externalLink": null,
                                    "page": null,
                                    "children": {
                                        "itemsCollection": {
                                            "items": [
                                                {
                                                    "sys": {
                                                        "id": "10oouXCjvnAo0OFEzfbTON"
                                                    },
                                                    "title": "Undergraduate New Students",
                                                    "description": null,
                                                    "slug": "undergraduate-new-students",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "7JuceL8Sy3KHlQMiBCS7bQ"
                                                        },
                                                        "__typename": "PageMinisiteLanding",
                                                        "slug": "new-students"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "4TuDOcClRMy7pL2dywxSRe"
                                                    },
                                                    "title": "Graduate New Students",
                                                    "description": null,
                                                    "slug": "graduate-new-students",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "5xOuo3h2Y5perugDMfPsAT"
                                                        },
                                                        "__typename": "PageMinisiteLanding",
                                                        "slug": "new-graduate-students"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "3sAMgeEmME0EG6lNMt7Afl"
                                    },
                                    "title": "The Stevens Experience",
                                    "description": null,
                                    "slug": "the-stevens-experience",
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "2Qc6NpC639VzU11hTaGwHX"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "the-stevens-experience"
                                    },
                                    "children": {
                                        "itemsCollection": {
                                            "items": [
                                                {
                                                    "sys": {
                                                        "id": "7zkKz42FvKhZExWt7CcDqp"
                                                    },
                                                    "title": "Living at Stevens",
                                                    "description": null,
                                                    "slug": "living-at-stevens",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "39gpcyzMULvLgxNf8jrwWM"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "living-at-stevens"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "5ELs9941dTw59shDT8AMAG"
                                                    },
                                                    "title": "Student Groups and Activities",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": "https://ducklink.stevens.edu/club_signup",
                                                    "page": null
                                                },
                                                {
                                                    "sys": {
                                                        "id": "7eLEmVworp6sUIR3EP5nZq"
                                                    },
                                                    "title": "Arts and Culture",
                                                    "description": null,
                                                    "slug": "arts-culture",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "57QJxyWzwLwnf3aQMkFk3A"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "arts-and-culture"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "47QeICHOiNREYdbCiqb8OY"
                                    },
                                    "title": "Supporting Your Journey",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": null,
                                    "children": {
                                        "itemsCollection": {
                                            "items": [
                                                {
                                                    "sys": {
                                                        "id": "5Ds3Pc7MMMUFBf5zmuUjJu"
                                                    },
                                                    "title": "Counseling and Psychological Services",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "2OMSjX2PWqRgp4tgulONHV"
                                                        },
                                                        "__typename": "PageMinisiteLanding",
                                                        "slug": "counseling-psychological-services"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "4BpppaK7a0wuNjYxtxiLwe"
                                                    },
                                                    "title": "Office of Student Support",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "4WHo0feNWbYebtBUW34BC4"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "student-support"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "5Lzw0DTnMqbzoG6mVQOJ1i"
                                                    },
                                                    "title": "Student Health Services",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "5K7IKVsnlBQUd0wAMKbnNl"
                                                        },
                                                        "__typename": "PageMinisiteLanding",
                                                        "slug": "student-health-services"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "ycfM4svRG1MNOt6epRMuf"
                                                    },
                                                    "title": "Office of Disability Services",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "7rMmbTOzwiikg98ptcomP2"
                                                        },
                                                        "__typename": "PageMinisiteLanding",
                                                        "slug": "disability-services"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "6TYu11MtnJ6eeWG1swcJug"
                                                    },
                                                    "title": "Other Support Resources",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "7ihTyuf6wX3nPMZKy2kD7m"
                                                        },
                                                        "__typename": "PageChapter",
                                                        "slug": "student-support"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "4sRnHQKuVWrMFTuELPq6ED"
                                    },
                                    "title": "Undergraduate Student Life ",
                                    "description": null,
                                    "slug": "undergraduate-student-life",
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "1o7Ramt44kkqBZNOIxS3Hq"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "undergraduate-student-life"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "3PRktQnuTFiKIRdIGAcJqF"
                                    },
                                    "title": "Graduate Student Life",
                                    "description": null,
                                    "slug": "graduate-student-life",
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "YNQYjgjIzxQLAZOHFRukW"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "graduate-student-life"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "2LKiVRjT9PlJHi6pQC86F6"
                                    },
                                    "title": "Building Your Career",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "5cYWEVsRDSL2CgMc2g37c5"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "career-center"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "2KNrVy5DneH06JmP4Bci9Q"
                                    },
                                    "title": "Student Affairs",
                                    "description": null,
                                    "slug": "student-affairs",
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "3uzV8EhGyMBEkqRB15WlrP"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "student-affairs"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "4bgGuPlaHIYTVgXx3AtaRM"
                                    },
                                    "title": "Commencement",
                                    "description": null,
                                    "slug": "commencement",
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "5YInCeVVPJlzlo1ykkgV5z"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "commencement"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "sys": {
                        "id": "3c8maJeipNRe3fzrFb5OpL"
                    },
                    "title": "Research",
                    "description": "From promising new classes of cancer medications to AI that detects falsehoods to 'green' filters that remove chemicals and poisons from drinking water, Stevens' research is making a difference to people and our world.\n",
                    "slug": "research",
                    "externalLink": null,
                    "page": null,
                    "children": {
                        "itemsCollection": {
                            "items": [
                                {
                                    "sys": {
                                        "id": "7w9ANSojavixT2tsSLPEyn"
                                    },
                                    "title": "Technology With Purpose",
                                    "description": null,
                                    "slug": "technology-purpose",
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "3r65biLbD9wHUb0bjX8JWk"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "technology-with-purpose"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "6ermkOkUpkUqVTEDwJQOE1"
                                    },
                                    "title": "Research Pillars",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "4sMaquPtfKkknEsBEzgHIe"
                                        },
                                        "__typename": "PageRightNav",
                                        "slug": "research-pillars"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "qhB2XwHr78AXaf6QZoKBN"
                                    },
                                    "title": "Faculty Research",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "6gNf42wiRZZcBHAOJtq2kE"
                                        },
                                        "__typename": "PageLanding",
                                        "slug": "faculty-research"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "74G6euCn1nXyhqMwCxEjHe"
                                    },
                                    "title": "Student Research",
                                    "description": null,
                                    "slug": "student-reseach",
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "1Hgnq0Oe4KRgWVnQVMoVlB"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "student-research"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "7bBlmXfOri0EhF8d3aNzFK"
                                    },
                                    "title": "Research Centers & Labs",
                                    "description": null,
                                    "slug": "research-centers-and-labs",
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "Eav1WxRlYYZWFCE4xaHz4"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "research-centers-and-labs"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "11vy20tdnr29P005IbEOxK"
                                    },
                                    "title": "Partner with Us",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "6i07MyzPJIGXwkZ4dPcZjK"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "partner-with-us"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "sys": {
                        "id": "53bh9Qgun6poXbRvZByD6h"
                    },
                    "title": "Admission & Aid",
                    "description": "With 35 undergraduate majors, 58 master’s degree programs and 20 Ph.D. programs, your potential is limitless. When you enroll at Stevens, your dreams are in reach and we’re here to help make them a reality. ",
                    "slug": "admission-aid",
                    "externalLink": null,
                    "page": null,
                    "children": {
                        "itemsCollection": {
                            "items": [
                                {
                                    "sys": {
                                        "id": "58qD1CHi0j61z6TKkD3UTV"
                                    },
                                    "title": "Why Stevens",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "5Af8vqP6nQNBG4eyHrV6mx"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "why-stevens"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "2cbQwGKyFhIpkdEm2ti4mc"
                                    },
                                    "title": "Undergraduate Admissions",
                                    "description": null,
                                    "slug": "undergraduate-admissions",
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "1H8AAQU7c069Hr6EJcOi2i"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "undergraduate-admissions"
                                    },
                                    "children": {
                                        "itemsCollection": {
                                            "items": [
                                                {
                                                    "sys": {
                                                        "id": "6THcLFFLz3zOKgIYhXuQP1"
                                                    },
                                                    "title": "How to Apply",
                                                    "description": null,
                                                    "slug": "how-to-apply",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "7HrUhBHQ4hdiom5IKOIaGL"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "how-to-apply"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "gRHGyOUqzvRjDe1hH3A9b"
                                                    },
                                                    "title": "Dates and Deadlines ",
                                                    "description": null,
                                                    "slug": "admissions-timeline",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "4yFpPgJtVAMvV33HWB8Biz"
                                                        },
                                                        "__typename": "PageBasic",
                                                        "slug": "admissions-timeline"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "6bbKMwVwZ8hGEkD1axyyT2"
                                                    },
                                                    "title": "Visit Campus ",
                                                    "description": null,
                                                    "slug": "visit-campus",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "1D848RH4cBp2nuwRnIV4I1"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "visit-campus"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "4qxGz0J0eeBHEuTem4VXov"
                                                    },
                                                    "title": "Accepted Students",
                                                    "description": null,
                                                    "slug": "accepted-students",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "7JuceL8Sy3KHlQMiBCS7bQ"
                                                        },
                                                        "__typename": "PageMinisiteLanding",
                                                        "slug": "new-students"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "3LmY5bhAVqIiJCH0RN5EtC"
                                                    },
                                                    "title": "Meet Our Staff",
                                                    "description": null,
                                                    "slug": "meet-our-staff",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "52PVQlFhSH42fo1qpMNot7"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "meet-our-staff"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "3mZazPT9Dvq4vGUwIf7I7r"
                                    },
                                    "title": "Graduate Admissions",
                                    "description": null,
                                    "slug": "graduate-admissions",
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "6TITaYWboIxchllkOsePx7"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "graduate-admissions-new"
                                    },
                                    "children": {
                                        "itemsCollection": {
                                            "items": [
                                                {
                                                    "sys": {
                                                        "id": "5KetvQgn9tQGNpdLjEypBF"
                                                    },
                                                    "title": "Apply to a Graduate Program",
                                                    "description": null,
                                                    "slug": "apply-grad",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "5FieOjoSHtNVBeRxlSp92S"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "apply-to-a-grad-program"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "2nuM92nNFdOsIwuTqvLx3S"
                                                    },
                                                    "title": "Costs and Funding",
                                                    "description": null,
                                                    "slug": "costs-and-funding",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "24pfGoWQ2o0gli6FDrlHbP"
                                                        },
                                                        "__typename": "PageMinisiteLanding",
                                                        "slug": "graduate-costs-and-funding"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "6wrakF9BS8LY7JceJ3NXYt"
                                                    },
                                                    "title": "Deadlines",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "3dHAQ38VbR4SCSvB7C22Jr"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "application-deadlines"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "75JvpGTmmQodnwRmZHw22W"
                                                    },
                                                    "title": "Visits and Events",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "6If9rsQJNyFQIbh2sd604l"
                                                        },
                                                        "__typename": "PageBasic",
                                                        "slug": "graduate-events-and-open-houses"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "13GtN4YiNZv5OmvhUt67OC"
                                                    },
                                                    "title": "Chat with a Student ",
                                                    "description": null,
                                                    "slug": "chat-with-a-student",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "aqPClFJ8QMgiKEO13gpRH"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "chat-with-a-student"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "583szyFUT63mIgBg7TP7ue"
                                    },
                                    "title": "Tuition and Financial Aid ",
                                    "description": null,
                                    "slug": "tuition-financial-aid",
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "4Fjcto9EAM2aYveh36rQY6"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "tuition-and-financial-aid"
                                    },
                                    "children": {
                                        "itemsCollection": {
                                            "items": [
                                                {
                                                    "sys": {
                                                        "id": "7aMWsI32PfbvtK2nihYFqB"
                                                    },
                                                    "title": "How to Apply for Aid",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "2b50pPbVnprFj7ds9DrU9x"
                                                        },
                                                        "__typename": "PageBrandingLanding",
                                                        "slug": "how-to-apply-for-aid"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "37CGS0b8r6WTGNZFCGp2Mo"
                                                    },
                                                    "title": "FAFSA Simplification ",
                                                    "description": null,
                                                    "slug": "fafsa-simplification",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "3jE4EFHigE6omDOlZ4lEoH"
                                                        },
                                                        "__typename": "PageBasic",
                                                        "slug": "fafsa-simplification"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "3WMaJIUzSow8n7qW7mmCti"
                                                    },
                                                    "title": "Undergraduate Costs and Aid",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "1TtVQgDYhaO046AuivNj9v"
                                                        },
                                                        "__typename": "PageRightNav",
                                                        "slug": "tuition-fees-and-costs"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "3fSmu0BReFCAlS1wld7II7"
                                                    },
                                                    "title": "Graduate Costs and Funding",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "24pfGoWQ2o0gli6FDrlHbP"
                                                        },
                                                        "__typename": "PageMinisiteLanding",
                                                        "slug": "graduate-costs-and-funding"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "dolqOtokFaKP0nqJ1zxQf"
                                                    },
                                                    "title": "Consumer Info",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "4bFtSSPG4VrHVhXTjmK9K8"
                                                        },
                                                        "__typename": "PageBasic",
                                                        "slug": "consumer-info"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "659kYGQhTqzj1Tf3p82UbR"
                                                    },
                                                    "title": "Contact Financial Aid",
                                                    "description": null,
                                                    "slug": "contact-financial-aid",
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "67IpieVLbFFSZNEm21v0hT"
                                                        },
                                                        "__typename": "PageBasic",
                                                        "slug": "contact-us-financial-aid"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "5hZTzWYhWjSv3GGqIhFEDD"
                                    },
                                    "title": "International Students",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "2LLiq9TFxz1EngBBLNtEBW"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "international-students"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "6AOFUg0M3Pt0zJXZEdoeDp"
                                    },
                                    "title": "Veterans and Military",
                                    "description": null,
                                    "slug": "veterans-and-military",
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "2nMCmbXcm13rrN0fhMgo76"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "veterans-and-military"
                                    },
                                    "children": {
                                        "itemsCollection": {
                                            "items": [
                                                {
                                                    "sys": {
                                                        "id": "5dh8yUWaqaaXUoOOzXspPH"
                                                    },
                                                    "title": "Military Education and Leadership Programs",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "3Ty575gFIMsbrUCdJPEPXU"
                                                        },
                                                        "__typename": "PageBasic",
                                                        "slug": "military-education-and-leadership-programs"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "cOp6LPhPTyHxxSSPuP1DZ"
                                                    },
                                                    "title": "Stevens ROTC Programs",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "60jOJSZz8TPYCyqvJPTuh6"
                                                        },
                                                        "__typename": "PageBrandingLanding",
                                                        "slug": "stevens-rotc-programs"
                                                    }
                                                },
                                                {
                                                    "sys": {
                                                        "id": "62ZkZC1XDUDeB5Uvgzvfbk"
                                                    },
                                                    "title": "Using Your GI Bill ",
                                                    "description": null,
                                                    "slug": null,
                                                    "externalLink": null,
                                                    "page": {
                                                        "sys": {
                                                            "id": "4A4jT2bzLOWr5m08XQw04H"
                                                        },
                                                        "__typename": "PageBasic",
                                                        "slug": "using-gi-bill"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "3wc0lx5j2upVw9mhrzDEOW"
                                    },
                                    "title": "Pre-College Programs",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "4YmPji4eSYgUZDP4bpoPrk"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "pre-college-at-stevens"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "WCgLwwEhAivyHhIr2Jlkw"
                                    },
                                    "title": "Visit Us ",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "children": null,
                                    "page": {
                                        "sys": {
                                            "id": "6UkcunjiJLYCpaFNbsXtyM"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "visit-stevens"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        }
    },
    "utilityMenu": {
        "itemsCollection": {
            "items": [
                {
                    "sys": {
                        "id": "54KXzMtCUJ6KrYbDSptHfw"
                    },
                    "title": "Corporate Relations ",
                    "description": null,
                    "slug": null,
                    "externalLink": null,
                    "children": null,
                    "page": {
                        "sys": {
                            "id": "5wJ6gNnEJdqVeuvGf2T6nS"
                        },
                        "__typename": "PageMinisiteLanding",
                        "slug": "corporate-relations"
                    }
                },
                {
                    "sys": {
                        "id": "2LiX4wMK7MsTyLz9ND0GWu"
                    },
                    "title": "Alumni",
                    "description": null,
                    "slug": null,
                    "externalLink": null,
                    "children": null,
                    "page": {
                        "sys": {
                            "id": "3OLwN88mequKjIuEtCjK4x"
                        },
                        "__typename": "PageMinisiteLanding",
                        "slug": "development-alumni-engagement"
                    }
                },
                {
                    "sys": {
                        "id": "2DyZ23H6M00LwRFJSV1XWQ"
                    },
                    "title": "Athletics",
                    "description": null,
                    "slug": null,
                    "externalLink": "https://stevensducks.com/",
                    "page": null,
                    "children": null
                },
                {
                    "sys": {
                        "id": "4VoZbSTUNhXQbJYNT7cnil"
                    },
                    "title": "Visit",
                    "description": null,
                    "slug": null,
                    "externalLink": null,
                    "children": null,
                    "page": {
                        "sys": {
                            "id": "6UkcunjiJLYCpaFNbsXtyM"
                        },
                        "__typename": "PageMinisiteLanding",
                        "slug": "visit-stevens"
                    }
                },
                {
                    "sys": {
                        "id": "5wGGimgLFp7qrBr5lxb6eW"
                    },
                    "title": "Apply",
                    "description": null,
                    "slug": null,
                    "externalLink": null,
                    "children": null,
                    "page": {
                        "sys": {
                            "id": "5lG4n23pgqibneHTDGPbv3"
                        },
                        "__typename": "PageMinisiteLanding",
                        "slug": "apply"
                    }
                },
                {
                    "sys": {
                        "id": "7yUbUDnGBm6f12CUANamMU"
                    },
                    "title": "Give",
                    "description": null,
                    "slug": null,
                    "externalLink": null,
                    "children": null,
                    "page": {
                        "sys": {
                            "id": "2qIMnL9pOCaQQCJqa9vVsa"
                        },
                        "__typename": "PageRightNav",
                        "slug": "give-to-stevens"
                    }
                },
                {
                    "sys": {
                        "id": "63PqqJ5PFqUWoDmz5ao1o5"
                    },
                    "title": "Info For",
                    "description": null,
                    "slug": "info-for",
                    "externalLink": null,
                    "page": null,
                    "children": {
                        "itemsCollection": {
                            "items": [
                                {
                                    "sys": {
                                        "id": "12eyc29hLbbCV8JhHHU7Le"
                                    },
                                    "title": "Future Students",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "5Af8vqP6nQNBG4eyHrV6mx"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "why-stevens"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "7n3QvYQWuRCz45DSs7Zaju"
                                    },
                                    "title": "Current Students",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": "https://login.stevens.edu",
                                    "page": null
                                },
                                {
                                    "sys": {
                                        "id": "4VPdyoQNLlSOCFY3tg56fd"
                                    },
                                    "title": "Faculty and Staff",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "5o3TqgCDD1my1UJaua3oyr"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "hr"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "1z2d0QjLJRMNIJbZ6mtWxw"
                                    },
                                    "title": "Parents and Families",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "47xJwaqhLDOgfhTrd6Kt6D"
                                        },
                                        "__typename": "PageRightNav",
                                        "slug": "information-for-parents-and-families"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "3Z9LauUmoh99nN0P2M1qgp"
                                    },
                                    "title": "High School Counselors",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "1pujuyMtnuF4r7A3fOxVYL"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "information-for-high-school-counselors"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "4ap36iZ4JCBSoBnIPGKYW2"
                                    },
                                    "title": "Media ",
                                    "description": null,
                                    "slug": "media-relations",
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "551lNnLC4kkzn9ZkE60DTk"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "media-relations"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "sys": {
                        "id": "5hg8EIkYbkrSmJv9HzchvO"
                    },
                    "title": "myStevens",
                    "description": null,
                    "slug": null,
                    "externalLink": "https://login.stevens.edu",
                    "page": null,
                    "children": null
                }
            ]
        }
    },
    "footerMenu": {
        "itemsCollection": {
            "items": [
                {
                    "sys": {
                        "id": "6eQ8CnXsaeRHV9ga3QUOiE"
                    },
                    "title": "Academics",
                    "description": "Stevens Institute of Technology is a student-centric research university, with technology at its core. Our three schools and one college uniquely prepare students for bright futures in diverse fields including tech, finance, medicine, energy, engineering — even art and music.",
                    "slug": "academics",
                    "externalLink": null,
                    "page": null,
                    "children": {
                        "itemsCollection": {
                            "items": [
                                {
                                    "sys": {
                                        "id": "5GWGFgsQGDctV0Tyv3NHxb"
                                    },
                                    "title": "Academics at Stevens",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "3f2Q4epZokFZlUeeDqGJoo"
                                        },
                                        "__typename": "PageLanding",
                                        "slug": "academics-at-stevens"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "5qPeBkMfUXPpxGJfTgzxoX"
                                    },
                                    "title": "Find Your Program",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": "https://programs.stevens.edu/",
                                    "page": null
                                },
                                {
                                    "sys": {
                                        "id": "3SY0lfD83GyCwI9Sfd6Teu"
                                    },
                                    "title": "Our Schools",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "ZqY0BQOzg0lIRVPi0rtvj"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "our-schools"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "5c3bouWFDXeXgvqPZSnAPQ"
                                    },
                                    "title": "Undergraduate Study",
                                    "description": null,
                                    "slug": "undergraduate-study",
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "4I4hWI39etGBtpq1uzdOw5"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "undergraduate-study"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "1Jtc5l21iB74MesTJuqtpf"
                                    },
                                    "title": "Graduate Study",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "14uD8iPfRa5nMzHic62LHv"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "graduate-study"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "5d6S87vTAWdiwgtLDvhVQ0"
                                    },
                                    "title": "Stevens Online",
                                    "description": null,
                                    "slug": "stevensonline",
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "3quXTh4ZcBGzAymZJKCJa2"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "stevens-online"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "1QRjNSDSaYAro7eLe5KqFG"
                                    },
                                    "title": "Corporate Education",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "H9UGBMJ3ef9EjqMacG5Zz"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "graduate-corporate-education"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "6BdtEvQBNqHuVZ5oHLKu7k"
                                    },
                                    "title": "Samuel C. Williams Library",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": "https://library.stevens.edu/home",
                                    "page": null
                                },
                                {
                                    "sys": {
                                        "id": "teB6rXcpxoHtbDj2vCh0K"
                                    },
                                    "title": "Academic Catalog ",
                                    "description": null,
                                    "slug": "academic-catalog",
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "7cINRR9OK2DpxbriEm4Ep6"
                                        },
                                        "__typename": "PageBasic",
                                        "slug": "academic-catalog"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "sys": {
                        "id": "27aaOTZrSZLMtVxR429GBc"
                    },
                    "title": "About",
                    "description": null,
                    "slug": "about-0",
                    "externalLink": null,
                    "page": null,
                    "children": {
                        "itemsCollection": {
                            "items": [
                                {
                                    "sys": {
                                        "id": "3n0cw8MmXQElbIoWXnDIKO"
                                    },
                                    "title": "Offices and Services",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "14noiVsruwIGq4U5f77tE5"
                                        },
                                        "__typename": "PageDirectory",
                                        "slug": "directory"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "5TibdWMxa0WuQ5As9Qy53f"
                                    },
                                    "title": "Policy Library",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "1jpChYotzIFouz23Nyucl1"
                                        },
                                        "__typename": "PageBasic",
                                        "slug": "policies-library"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "4tO14NyiIeIGVS3WLZoqNf"
                                    },
                                    "title": "Accreditation",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "4nxQyHfYQJqoG9UrocS6Dq"
                                        },
                                        "__typename": "PageRightNav",
                                        "slug": "accreditation"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "dolqOtokFaKP0nqJ1zxQf"
                                    },
                                    "title": "Consumer Info",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "4bFtSSPG4VrHVhXTjmK9K8"
                                        },
                                        "__typename": "PageBasic",
                                        "slug": "consumer-info"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "sys": {
                        "id": "7rGx4BVt4qfokKtCg20j4T"
                    },
                    "title": "Campus",
                    "description": null,
                    "slug": "campus",
                    "externalLink": null,
                    "page": null,
                    "children": {
                        "itemsCollection": {
                            "items": [
                                {
                                    "sys": {
                                        "id": "3ZbsM1z2vfD9U2RQn5B4bg"
                                    },
                                    "title": "Events",
                                    "description": null,
                                    "slug": "events",
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "5A0ZGGGa3sbiH3285vVAQj"
                                        },
                                        "__typename": "PageEventsCalendar",
                                        "slug": "events"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "1llUJYpqcu1EpkvCsTS8t7"
                                    },
                                    "title": "Campus Safety",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "7s8o4gXXMrqwi8YtrySupL"
                                        },
                                        "__typename": "PageBasic",
                                        "slug": "campus-safety"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "3bFjbP1fKl6o7IWoumplO1"
                                    },
                                    "title": "Health Resources and Information",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "6i4WYdwj0I0PvyvlCCZqpX"
                                        },
                                        "__typename": "PageBasic",
                                        "slug": "health-resources-and-information"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "2bXSaiScYoHHsAaDMZRSD2"
                                    },
                                    "title": "Bookstore",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": "https://stevens.bncollege.com/",
                                    "page": null
                                }
                            ]
                        }
                    }
                },
                {
                    "sys": {
                        "id": "3RVTJtjeVWPgzdvs4sFXTp"
                    },
                    "title": "Connect",
                    "description": null,
                    "slug": "connect",
                    "externalLink": null,
                    "page": null,
                    "children": {
                        "itemsCollection": {
                            "items": [
                                {
                                    "sys": {
                                        "id": "7Hf1ON9zfaeklXpHTg9B12"
                                    },
                                    "title": "Directory",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "14noiVsruwIGq4U5f77tE5"
                                        },
                                        "__typename": "PageDirectory",
                                        "slug": "directory"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "4MfA4bUbaPtf0YZ7gfPZRO"
                                    },
                                    "title": "Work at Stevens",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "3ie4Qj6xuHXNXU0s8amrax"
                                        },
                                        "__typename": "PageRightNav",
                                        "slug": "careers-at-stevens"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "4vlCMyr7gspV09rFzF1d3k"
                                    },
                                    "title": "Admissions",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "3LLMO3guhcXMunZh5X6PLq"
                                        },
                                        "__typename": "PageBrandingLanding",
                                        "slug": "admissions"
                                    }
                                },
                                {
                                    "sys": {
                                        "id": "5zUxp3hwaW47F1GrVosxFx"
                                    },
                                    "title": "Media Relations",
                                    "description": null,
                                    "slug": null,
                                    "externalLink": null,
                                    "page": {
                                        "sys": {
                                            "id": "551lNnLC4kkzn9ZkE60DTk"
                                        },
                                        "__typename": "PageMinisiteLanding",
                                        "slug": "media-relations"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        }
    },
    "footerUtilityMenu": {
        "itemsCollection": {
            "items": [
                {
                    "sys": {
                        "id": "4VoZbSTUNhXQbJYNT7cnil"
                    },
                    "title": "Visit",
                    "description": null,
                    "slug": null,
                    "externalLink": null,
                    "page": {
                        "sys": {
                            "id": "6UkcunjiJLYCpaFNbsXtyM"
                        },
                        "__typename": "PageMinisiteLanding",
                        "slug": "visit-stevens"
                    }
                },
                {
                    "sys": {
                        "id": "5wGGimgLFp7qrBr5lxb6eW"
                    },
                    "title": "Apply",
                    "description": null,
                    "slug": null,
                    "externalLink": null,
                    "page": {
                        "sys": {
                            "id": "5lG4n23pgqibneHTDGPbv3"
                        },
                        "__typename": "PageMinisiteLanding",
                        "slug": "apply"
                    }
                },
                {
                    "sys": {
                        "id": "2U7JQplcoKIytvRUSQH8Bk"
                    },
                    "title": "Make a Gift",
                    "description": null,
                    "slug": null,
                    "externalLink": "https://connect.stevens.edu/makeagift",
                    "page": null
                },
                {
                    "sys": {
                        "id": "1P27vdC9zhIVhcf37DLlj7"
                    },
                    "title": "myStevens",
                    "description": null,
                    "slug": null,
                    "externalLink": "https://login.stevens.edu/",
                    "page": null
                }
            ]
        }
    },
    "footerLegalMenu": {
        "itemsCollection": {
            "items": [
                {
                    "sys": {
                        "id": "7a9Q3UiFAZ2TZ1fDfELk4d"
                    },
                    "title": "Privacy Policy",
                    "description": null,
                    "slug": null,
                    "externalLink": null,
                    "page": {
                        "sys": {
                            "id": "3vWUNz1lKhPGrTQVwIqmH7"
                        },
                        "__typename": "PageBasic",
                        "slug": "privacy-policy"
                    }
                },
                {
                    "sys": {
                        "id": "DGS4D33gJoAgvUcFAaYis"
                    },
                    "title": "Title IX Policy",
                    "description": null,
                    "slug": null,
                    "externalLink": null,
                    "page": {
                        "sys": {
                            "id": "6OcPANGshlfneCNLQkH41l"
                        },
                        "__typename": "PageBasic",
                        "slug": "title-ix"
                    }
                },
                {
                    "sys": {
                        "id": "3D4Ddl7vA2fLH2itFH3usN"
                    },
                    "title": "Emergency Info",
                    "description": null,
                    "slug": null,
                    "externalLink": null,
                    "page": {
                        "sys": {
                            "id": "6LA6gAwTu2zyddBxMaYRY4"
                        },
                        "__typename": "PageBasic",
                        "slug": "emergency-information"
                    }
                }
            ]
        }
    }
},
};

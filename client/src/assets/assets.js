import logo from './logo.png'
import logo_icon from './logo_icon.png'
import github_icon from './github_icon.png'
import instagram_icon from './instagram_icon.png'
import linkedin_icon from './linkedin_icon.png'
import funny from './funny.png'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.jpg'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.webp'
import profile_img_2 from './profile_img_2.webp'
import profile_img_3 from './profile_img_3.webp'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'

export const assets = {
    logo,
    logo_icon,
    github_icon,
    instagram_icon,
    linkedin_icon,
    funny,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    razorpay_logo,
    stripe_logo
}

export const stepsData = [
    {
      title: 'Bring Your Ideas to Life',
      description: 'Enter a phrase, sentence, or brief description to bring your idea to life.',
      icon: step_icon_1,
    },
    {
      title: 'See the Magic Unfold',
      description: 'Our AI engine instantly converts your text into a high-quality, one-of-a-kind image.',
      icon: step_icon_2,
    },
    {
      title: 'Save & Share Effortlessly',
      description: 'Download your masterpiece instantly or share it with the world in a click.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:profile_img_1,
        name:'Aarav Mehta',
        role:'Digital Artist',
        stars:5,
        text:`I've been using this AI image generator for my design projects, and it never fails to impress. The quality and creativity it brings to life are simply amazing!`
    },
    {
        image:profile_img_2,
        name:'Sanya Kapoor',
        role:'Content Creator',
        stars:5,
        text:`This tool has completely transformed the way I create visuals for my blog and social media. Fast, easy, and absolutely stunning results!`
    },
    {
        image:profile_img_3,
        name:'Rohan Joshi',
        role:' Graphic Designer',
        stars:5,
        text:`I use this AI for concept art and character designs, and it saves me hours of work. The results are mind-blowing!`
    },
]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]
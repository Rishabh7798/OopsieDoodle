import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center p-6 md:px-28"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}   
        >
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create AI Images</h1>
            <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>
            <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
                <img src={assets.sample_img_1} className="w-80 xl:w-96 rounded-lg" alt="" />
                <div>
                    <h2 className="text-3xl font-medium max-w-lg mb-4">Experience the Future of Creativity with Our AI-Powered Text-to-Image Generator.</h2>
                    <p className=" text-gray-600 mb-4">
                        Effortlessly turn your ideas into reality with our free AI image generator. Whether you need breathtaking visuals or one-of-a-kind imagery, our tool converts your text into stunning images in just a few clicks. Imagine, describe, and watch it come to life instantly.
                    </p>
                    <p className=" text-gray-600">
                        Simply enter a text prompt, and our powerful AI will generate high-quality images in seconds. From product visuals to character designs and beyond, even the most imaginative concepts can be visualized with ease. With advanced AI technology, your creativity knows no bounds!
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Description
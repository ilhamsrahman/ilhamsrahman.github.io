import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { withBase } from '@/lib/base-path'


export default function Hero() {

  
  // useEffect(() => {
  //   const sentences = [
  //     "Abnormal Psychology",
  //     "Astrophysics",
  //     "Computer Science",
  //   ];
  //   const typewriter = document.getElementById("typewriter");
  //   let sentenceIndex = 0;
  //   let charIndex = 0;

  //   const typeNextCharacter = () => {
  //     const sentence = sentences[sentenceIndex];
  //     typewriter.textContent = sentence.substring(0, charIndex);
  //     charIndex++;
  //     if (charIndex > sentence.length) {
  //       charIndex = 0;
  //       sentenceIndex++;
  //       if (sentenceIndex >= sentences.length) {
  //         sentenceIndex = 0;
  //       } 
  //     }
  //     setTimeout(typeNextCharacter, 150); // Adjust the typing speed here (in milliseconds)
  //   };

  //   typeNextCharacter();
  // }, []);

  return (
    <section className=''>
      <link href='https://fonts.googleapis.com/css?family=Rakkas' rel='stylesheet'></link>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        

        {/* Hero content */}
        <div className="relative pt-28 pb-4 md:pt-40 md:pb-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
          <div className="md:basis-3/4">

            <div className="text-black Rakkas">
            <div className="flex items-center justify-between gap-4 mb-4 md:block md:mb-0">
              <h1 className="h1 md:mb-4 Rakkas" data-aos="fade-up">Hello!</h1>
              {/* Small round photo next to "Hello!" on phones */}
              <img src={withBase('/images/me.jpg')} className="md:hidden w-20 h-20 shrink-0 rounded-full object-cover ring-[3px] ring-white" alt="My Photo" />
            </div>
              <p className="text-xl " data-aos="fade-up" data-aos-delay="200">My name is Ilham.</p>
              <p className="text-xl " data-aos="fade-up" data-aos-delay="200">Indonesian studied Business at HKUST.</p>
              <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">I love to share my things here.</p>
            </div>
          </div>
          <div className="hidden md:block shrink-0" data-aos="fade-up">
            <img src={withBase('/images/me.jpg')} className="w-48 h-48 rounded-full object-cover ring-4 ring-white shadow-xl" alt="My Photo" />
          </div>
        </div>
      </div>

      {/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Start free trial</a>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">Learn more</a>
                </div>
              </div> */}
      {/* <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1024}
              thumbHeight={576}
              thumbAlt="Modal video thumbnail"
              video="/videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080} /> */}
    </section>
  )
}

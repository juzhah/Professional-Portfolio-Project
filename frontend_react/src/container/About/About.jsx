import React from 'react';
import { useEffect, useState } from 'react';

import './About.scss';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';

import { images } from '../../constants';
import { client, urlFor } from '../../client';

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Design</span> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((data, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profiles-item"
            key={data.title + index}>
            <img src={urlFor(data.imgUrl)} alt={data.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {data.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {data.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default AppWrap(About, 'about');

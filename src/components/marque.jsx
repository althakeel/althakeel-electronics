import React from 'react';

const Marquee = () => {
  const marqueeContainer = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
    background: 'transparent',
    padding: '10px 0',
    boxSizing: 'border-box'
  };

  const marqueeTrack = {
    display: 'inline-block',
    animation: 'marquee 30s linear infinite'
  };

  const logoStyles = {
    height: '60px',
    margin: '0 20px',
    display: 'inline-block',
    verticalAlign: 'middle'
  };

  const keyframes = `
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
  `;

 const logos = [
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411523/1_sjxbyu.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411523/2_sp6yxe.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411523/3_g9nm8p.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411523/4_g4zgcg.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411524/5_uiu9ww.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411524/6_msoyiz.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411523/7_wkyn10.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411523/8_xl7pzz.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411524/9_ugy0hr.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411524/10_ppew9g.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411524/11_sy0brn.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411526/19_f4k0vi.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1750062135/Logo_1_t452xs.webp",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411525/12_gfzr55.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411525/13_yogh1b.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411525/14_fmbqqe.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411525/15_e3p98i.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411525/16_ystjfb.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411525/17_zf2fr9.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411526/18_y2czi6.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411526/20_ill4jl.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411529/21_yrarvl.png",
  "https://res.cloudinary.com/dm8z5zz5s/image/upload/v1748411540/22_ijiz06.png",
];


  // Duplicate logos for infinite effect
  const allLogos = [...logos, ...logos];

  return (
    <div style={marqueeContainer}>
      {/* Inject Keyframes */}
      <style>{keyframes}</style>

      {/* Marquee Track */}
      <div style={marqueeTrack}>
        {allLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`logo-${index}`} style={logoStyles} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;

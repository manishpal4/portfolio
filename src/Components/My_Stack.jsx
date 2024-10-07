import React from "react";

// Named export
export const My_Stack = () => {
  const tools = [
    {
      name: "Figma",
      url: "https://www.figma.com/",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yRHFVV_PmWFm0zugQiViyzuGWXYhmjKVp-yJ-zZWVBXxw98sT59yO02nk6vqM_BxXbc&usqp=CAU",
    },
    {
      name: "Notion",
      url: "https://www.notion.so/",
      imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/1024px-Notion-logo.svg.png",
    },
    {
      name: "Framer",
      url: "https://www.framer.com/",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpoKk8ADopGpzpgcUN06EmKmdV0nGBamFGpA&s",
    },
    {
      name: "CorelDRAW",
      url: "https://coreldraw.com/en/",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBVGb0njqkB2EJztjZq_1b9-9rpfnIo_wiA&s",
    },
    {
      name: "Illustator",
      url: "https://www.adobe.com/in/products/illustrator.html",
      imgSrc: "data:image/png;base64,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", 
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white p-5 md:p-10">
      {Array(1)
        .fill()
        .map((_, index) => (
          <div key={index} className="flex flex-wrap items-center justify-center gap-5 w-full">
            {tools.map((tool) => (
              <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <div className="bg-white/5 px-3 py-3 text-center rounded-xl w-32 md:w-40">
                  <div className="w-20 h-20 flex items-center justify-center mx-auto">
                    <img
                      className="rounded-full object-cover"
                      src={tool.imgSrc}
                      alt={tool.name}
                    />
                  </div>
                  <p className="pt-2 text-sm md:text-base">{tool.name}</p>
                </div>
              </a>
            ))}
          </div>
        ))}
    </div>
  );
};

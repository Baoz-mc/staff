// Mapping roles to Font Awesome icons
const roleIcons = {
  "Co-Owner": "fas fa-crown",
  "Founder": "fas fa-star",
  "Developer": "fas fa-code-branch",
  "Coder": "fas fa-code",
  "Artist": "fas fa-palette",
  "Staff": "fas fa-users",
  "Media": "fas fa-camera"
};


const localData = {
  "wait...": {
    uuid: "ec561538f3fd461daff5086b22154bce",
    name: "Wait...",
    role: "Co-Owner",
    quote: "Patience is key.",
    achievements: ["Overseeing operations"],
    socials: {}
  },
  khoidevil: {
    uuid: "e134b0f83b93429599edb39eada483b6",
    name: "khoidevil",
    role: "Co-Owner",
    quote: "Anh không có gì ngoài tiền",
    achievements: [
      "ㅤFounder Horizon Network",
      "ㅤCo-Owner StellaStudio",
      "ㅤGiàu là một loại thực lực",
    ],
    socials: {
      discord: "kidoakira",
    }
  },
  keepmeside: {
    uuid: "8938fa09e6fc47669d3a65fddf19fa7b",
    name: "Keepmeside",
    role: "Founder",
    quote: "Thích ăn cá nóc lúc học toán!",
    achievements: [
      "ㅤSáng lập Stella Studio",
      "ㅤCựu Admin Mineahihi",
      "ㅤCựu Admin Minebachay",
      "ㅤCựu Admin 3fMC",
      "ㅤCựu Admin Minetrungco"
    ],
    socials: {
      discord: "keepmeside",
      github: "https://github.com/keepmeside"
    }
  },
  salmonstl: {
    uuid: "9b816a3427654ccc8d2e626680d67a24",
    name: "SalmonSTL",
    role: "Founder",
    quote: "Thích cá hồi, sợ triều đình.",
    achievements: [
      "ㅤSáng lập Stella Studio",
      "ㅤCựu Admin Mineahihi",
      "ㅤCựu Admin 3fMC",
      "ㅤCựu Admin Waragemc (2021)"
    ],
    socials: {
      discord: "salmon_0111"
    }
  },
  salyvn: {

    uuid: "9b6ebdbbd92041faa61721ddc6658708",
    name: "SalyVn",
    role: "Founder",
    quote: "Lúc nào cũng đẹp trai, có lúc không.",
    achievements: [
      "ㅤSáng lập Stella Studio",
      "ㅤAuthor MMoitems extension - Vscode",
      "ㅤCựu Admin Mineahihi",
      "ㅤCựu Admin 3fMC",
      "ㅤCựu Admin Waragemc (2021)",
      "ㅤSản phẩm từng và đang được sử dụng tại các server lớn như LuckyVn, Mineahihi, SuperMC, HeroMc, SoulMc, VinaMc, ..."
    ],
    socials: {
      discord: "salyy.0105",
      github: "https://github.com/SalyyS1"
    }
  },
  karis: {
    // Assuming username is Karis for Crafatar
    uuid: "29d88c40-13c8-4fae-8e7d-40af3488e9bb",
    name: "Karis",
    role: "Developer",
    quote: "Một con người bị tha hóa thành nô lệ tư bản",
    achievements: [
      "ㅤDeveloper Stella Studio",
      "ㅤAuthor Furnace - Tools Convert Pack",
    ],
    socials: {
      discord: "_karisan_",
      github: "https://github.com/Karis-tlg"
    }
  },
  "d.": {
    uuid: "dfebec356a2d44c28350a10fdfd52a64",
    name: "D.",
    role: "Coder",
    quote: "Tham vọng lật đổ Stella",
    achievements: [
      "ㅤDeveloper Stella Studio",
      "ㅤSản phẩm đang được sử dụng tại HeroMc",
      "ㅤOwner máy chủ..."
    ],
    socials: {}
  },
  thatcorona: {
    uuid: "602b734d72f24ab781aba287e0e9e999",
    name: "ThatCorona",
    role: "Coder",
    quote: "Tham vọng",
    achievements: [
      "ㅤDeveloper Stella Studio",
      "ㅤOwner SimpMC",
      "ㅤCựu Admin Mineahihi",
      "ㅤCựu Admin LangBatOn",
      "ㅤKhách hàng: VinaMc, IndraMc, DPTMC, SoulMc, Zone Of Wonders",
      "ㅤAuthor Plugins: GameProfileSelector, ChuyenXu, TuCheTao"
    ],
    socials: {
      discord: "typical.smc",
      github: "https://github.com/TypicalShavonne"
    }
  },
  vochidanh: {
    uuid: "619e7f345fa74b66b33961454e7a2c58",
    name: "VoChiDanh",
    role: "Coder",
    quote: "Yêu IT bằng cả tính mạng",
    achievements: [
      "ㅤDeveloper Stella Studio",
      "ㅤAdmin Horizon-MC",
      "ㅤCựu Admin Grassmine",
      "ㅤAuthor Plugins: StackCraft, MCoreAddon, Storage, AbandonDungeons, bSoul, MiningContest, MMOCraftingStation, MineRegion,...",
      "ㅤXem thêm tại: https://www.spigotmc.org/members/vochidanh.1331810/"
    ],
    socials: {
      discord: "vochidanh",
      github: "https://github.com/vochidanh"
    }
  },
  tonthu: {
    uuid: "081ce9f8fd19468c9af63e18c1b7b8e3",
    name: "TonThu",
    role: "Artist",
    quote: "Nhỏ nhất nhà",
    achievements: [
      "ㅤArtist Stella Studio",
      "ㅤCựu Admin 3FMC"
    ],
    socials: {
      discord: "vuhaquan"
    }
  },
  soulz3rez_: {
    uuid: "a91e7909ca1047a78b4b0853165ccf45",
    name: "Soulz3Rez_",
    role: "Staff",
    quote: "Nô lệ tư bản nhà Sâu.",
    achievements: [
      "ㅤStaff Stella Studio",
      "ㅤAdmin SoulMc"
    ],
    socials: {
        discord: "nnm2309_"
    }
  },
  nuoccam: {
    uuid: "4d9c7456dba747f4b42c6ef0ca2a06bb",
    name: "NuocCam",
    role: "Staff",
    quote: "Sưu tầm Harem",
    achievements: [
      "ㅤStaff Stella Studio",
      "ㅤCựu Staff HeroMc",
      "ㅤCựu Staff Mineahihi"
    ],
    socials: {
        discord: "_nuoccam"
    }
  },
  yitell: {
    uuid: "0a01c5e5f3244c7d8f1cf8028ffe8de9",
    name: "Yitell",
    role: "Staff", // Role updated as requested
    quote: "Hành tung bí ẩn",
    achievements: ["Hiện không hoạt động"],
    socials: {}
  },
  _isherry_: {
    uuid: "9de3bff4-2e33-4234-aa0e-f12dc2235495",
    name: "_iSherry_",
    role: "Media",
    quote: "Học giỏi để cưới đại gia.",
    achievements: [
      "ㅤMedia Stella Studio",
      "ㅤManager Discord NeyuQ",
      "ㅤFounder Thủy Cung Nhà Cá"
    ],
    socials: {
      discord: "isherry.ngk",
    }
  },
  cactus: {
    uuid: "e0edf739f6a5440f958844616f4555dc",
    name: "Cactus",
    role: "Media",
    quote: "Siêu tham vọng",
    achievements: [
      "ㅤMedia Stella Studio",
      "ㅤCựu Admin SoulMc",
      "ㅤAdmin Grassmine",
      "ㅤAdmin CariMc"
    ],
    socials: {
      discord: "cactusz_1302"
    }
  }
};

window.onload = () => {
  console.log("Window loaded. Checking for skinview3d library...");

  if (typeof skinview3d === 'undefined') {
      console.error("skinview3d library is not loaded! Check the script tag in detail.html.");

      const mainContent = document.querySelector("main.profile-container");
      if (mainContent) {
          mainContent.innerHTML = `<div style="color: yellow; text-align: center; padding: 2rem; background: rgba(0,0,0,0.5); border-radius: 10px;"><h2>Lỗi tải thư viện skin</h2><p>Không thể tải thư viện skinview3d. Vui lòng kiểm tra kết nối mạng hoặc làm mới trang.</p></div>`;
      }
      return;
  }
  console.log("skinview3d library found.");

  const urlParams = new URLSearchParams(window.location.search);
  const usernameParam = urlParams.get("id");
  const memberId = usernameParam?.toLowerCase();
  const info = localData[memberId];

  if (!memberId || !info) {
    document.body.innerHTML = "<h2 style=\"text-align: center; padding: 3rem; color: #ffcc00;\">Không tìm thấy thành viên.</h2>";
    return;
  }

  document.getElementById("name").textContent = info.name;


  const roleBadge = document.getElementById("role-badge");
  const iconClass = roleIcons[info.role] || "fas fa-question-circle";
  roleBadge.innerHTML = `<i class="${iconClass}"></i> ${info.role}`;

  document.getElementById("quote").textContent = `\"${info.quote}\"`;


  const skinIdentifier = info.uuid;
  if (!skinIdentifier) {
      console.warn(`No UUID or Username found for ${info.name}`);

  }


  const skinUrl = `https://crafatar.com/skins/${skinIdentifier}`;
  const canvas = document.getElementById("skin-canvas");

  if (!canvas) {
      console.error("Canvas element 'skin-canvas' not found!");
      return;
  }

  try {
    console.log(`Initializing SkinViewer for ${info.name} with identifier: ${skinIdentifier}`);
    const viewer = new skinview3d.SkinViewer({
      canvas: canvas,
      width: 300,
      height: 400,
      skin: skinUrl,
      background: null
    });
    console.log("SkinViewer initialized.");

    viewer.controls.enableRotate = true;
    viewer.controls.enableZoom = true;
    viewer.controls.enablePan = false;
    viewer.zoom = 0.8;
    console.log("Controls configured.");


    if (skinview3d.WalkingAnimation) {
        viewer.animation = new skinview3d.WalkingAnimation();
        viewer.animation.speed = 1;
        viewer.animation.play();
        console.log("Walking animation started.");
    } else {
        console.warn("WalkingAnimation class not found. Skipping animation.");
    }

  } catch (error) {
    console.error("Error initializing SkinViewer:", error);

    const ctx = canvas.getContext("2d");
    if (ctx) {
        try {
            ctx.fillStyle = "rgba(0,0,0,0.7)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "orange";
            ctx.font = "16px Poppins";
            ctx.textAlign = "center";
            ctx.fillText("Lỗi tải skin", canvas.width / 2, canvas.height / 2 - 10);
            ctx.font = "12px Poppins";
            ctx.fillText("(Kiểm tra UUID/Username)", canvas.width / 2, canvas.height / 2 + 10);
        } catch(e) {
            console.error("Failed to draw error on canvas:", e);
        }
    }
  }


  const ul = document.getElementById("achievements");
  if (ul && info.achievements && info.achievements.length > 0) {
      ul.innerHTML = '';
      info.achievements.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
  } else if (ul) {
      ul.innerHTML = '<li>Chưa có thông tin thành tựu.</li>';
  } else {
      console.error("Achievements list element not found!");
  }


  const social = document.getElementById("social");
  if (social) {
      social.innerHTML = '<h3>Liên kết</h3>'; // Add heading
      let hasSocials = false;
      if (info.socials?.discord) {
        social.innerHTML += `<p><i class="fab fa-discord"></i> Discord: <code>${info.socials.discord}</code></p>`;
        hasSocials = true;
      }
      if (info.socials?.github) {
        social.innerHTML += `<p><a href="${info.socials.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a></p>`;
        hasSocials = true;
      }

      if (!hasSocials) {
          social.innerHTML += '<p>Không có liên kết nào được cung cấp.</p>';
      }
  } else {
      console.error("Social links container element not found!");
  }
};

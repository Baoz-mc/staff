// Thông tin thành viên có UUID tĩnh
const localData = {
  keepmeside: {
    uuid: "8938fa09e6fc47669d3a65fddf19fa7b", // UUID rút gọn, không có dấu -
    name: "Keepmeside",
    role: "Founder",
    quote: "Luôn tỉnh táo, trừ lúc ngủ!",
    achievements: [
      "Sáng lập Stella Studio",
      "200+ dự án Minecraft",
      "Command block master"
    ],
    socials: {
      discord: "keepme#1234",
      github: "https://github.com/keepmeside"
    }
  },
  salmon: {
    uuid: "f905e25c63164d8d923c6382217d5593",
    name: "Salmon",
    role: "Founder",
    quote: "Thích cá hồi, ghét lag.",
    achievements: [
      "Tối ưu server cho 1000+ player",
      "Tạo plugin độc quyền",
      "Backend siêu cấp"
    ],
    socials: {
      discord: "salmon#4321"
    }
  }
};

window.onload = () => {
  console.log("Window loaded. Checking for skinview3d library...");

  // Check if skinview3d library is loaded
  if (typeof skinview3d === 'undefined') {
      console.error("skinview3d library is not loaded! Check the script tag in detail.html.");
      alert("Lỗi: Không thể tải thư viện hiển thị skin (skinview3d). Vui lòng kiểm tra lại kết nối mạng hoặc liên hệ quản trị viên.");
      // Optionally draw an error message on canvas
      const canvas = document.getElementById("skin-canvas");
      if (canvas) {
          const ctx = canvas.getContext("2d");
          if (ctx) {
              ctx.fillStyle = "black";
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              ctx.fillStyle = "yellow";
              ctx.font = "14px Arial";
              ctx.textAlign = "center";
              ctx.fillText("Lỗi tải thư viện skinview3d", canvas.width / 2, canvas.height / 2);
          }
      }
      return; // Stop execution if library is missing
  }
  console.log("skinview3d library found:", skinview3d);

  const usernameParam = new URLSearchParams(window.location.search).get("id");
  const info = localData[usernameParam?.toLowerCase()];
  if (!usernameParam || !info) {
    document.body.innerHTML = "<h2>Không tìm thấy thành viên.</h2>";
    return;
  }

  document.getElementById("name").textContent = info.name;
  document.getElementById("role-badge").textContent = info.role;
  document.getElementById("quote").textContent = `\"${info.quote}\"`;

  const uuid = info.uuid;
  if (!uuid) {
    alert("Không có UUID cho người này.");
    return;
  }

  const skinUrl = `https://crafatar.com/skins/${uuid}`;
  const canvas = document.getElementById("skin-canvas");

  if (!canvas) {
      console.error("Canvas element 'skin-canvas' not found!");
      alert("Lỗi: Không tìm thấy phần tử canvas để vẽ skin.");
      return;
  }

  try {
    console.log("Initializing SkinViewer...");
    const viewer = new skinview3d.SkinViewer({
      canvas: canvas,
      width: 300,
      height: 400,
      skin: skinUrl
    });
    console.log("SkinViewer initialized.");

    viewer.controls.enableRotate = true;
    viewer.controls.enableZoom = true;
    viewer.controls.enablePan = false;
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
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "orange";
            ctx.font = "16px Arial";
            ctx.textAlign = "center";
            ctx.fillText("Lỗi khởi tạo viewer", canvas.width / 2, canvas.height / 2);
        } catch(e) {
            console.error("Failed to draw error on canvas:", e);
        }
    }
  }

  const ul = document.getElementById("achievements");
  if (ul) {
      info.achievements.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
  } else {
      console.error("Achievements list element not found!");
  }

  const social = document.getElementById("social");
  if (social) {
      social.innerHTML = '';
      if (info.socials?.discord) {
        social.innerHTML += `<p>Discord: <code>${info.socials.discord}</code></p>`;
      }
      if (info.socials?.github) {
        social.innerHTML += `<p><a href="${info.socials.github}" target="_blank">GitHub</a></p>`;
      }
  } else {
      console.error("Social links container element not found!");
  }
};

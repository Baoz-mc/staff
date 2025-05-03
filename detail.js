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
  const username = new URLSearchParams(window.location.search).get("id");
  const info = localData[username?.toLowerCase()];
  if (!username || !info) {
    document.body.innerHTML = "<h2>Không tìm thấy thành viên.</h2>";
    return;
  }

  document.getElementById("name").textContent = info.name;
  document.getElementById("role-badge").textContent = info.role;
  document.getElementById("quote").textContent = `"${info.quote}"`;

  const uuid = info.uuid;
  if (!uuid) {
    alert("Không có UUID cho người này.");
    return;
  }

  const viewer = new skinview3d.SkinViewer({
    canvas: document.getElementById("skin-canvas"),
    width: 300,
    height: 400,
    skin: `https://crafatar.com/skins/${uuid}`
  });

  viewer.controls.enableRotate = true;
  viewer.controls.enableZoom = true;
  viewer.controls.enablePan = false;

  viewer.animation = new skinview3d.WalkingAnimation();
  viewer.animation.speed = 1;
  viewer.animation.play();

  const ul = document.getElementById("achievements");
  info.achievements.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });

  const social = document.getElementById("social");
  if (info.socials?.discord) {
    social.innerHTML += `<p>Discord: <code>${info.socials.discord}</code></p>`;
  }
  if (info.socials?.github) {
    social.innerHTML += `<p><a href="${info.socials.github}" target="_blank">GitHub</a></p>`;
  }
};


export function HeroImage() {
  return (
    <section className="relative mx-auto max-w-5xl px-4 py-12">
      <div className="relative w-full aspect-900/880">
        <svg
          viewBox="0 0 900 880"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id="photoBlob" clipPathUnits="userSpaceOnUse">
              <path d="M175,175 C165,115 225,80 300,88 C360,95 385,128 430,138 C482,150 512,126 520,178 C528,228 505,258 512,318 C520,398 528,468 505,540 C482,610 428,652 358,655 C288,658 236,626 208,566 C182,512 194,462 172,402 C150,338 182,238 175,175 Z" />
            </clipPath>
          </defs>

          {/* laranja */}
          <path
            d="M150,120 C118,42 220,-12 322,8 C398,24 420,68 482,54 C562,34 624,70 612,142 C602,212 522,232 442,216 C380,204 340,240 268,234 C188,228 160,188 150,120 Z"
            fill="#F2A83B"
          />

          {/* vermelho */}
          <path
            d="M38,258 C6,218 18,168 70,152 C122,136 164,172 174,228 C184,284 152,330 100,336 C58,342 58,300 38,258 Z"
            fill="#E1503A"
          />

          {/* azul claro */}
          <path
            d="M36,468 C4,520 16,592 68,624 C130,660 192,634 202,572 C212,510 172,460 112,454 C80,450 58,448 36,468 Z"
            fill="#A9D8EA"
          />

          {/* azul escuro */}
          <path
            d="M520,880 L520,596 C520,536 572,498 632,508 C682,516 692,560 742,554 C814,546 864,590 874,652 C884,724 842,784 770,804 C700,824 660,792 610,812 C570,828 540,852 520,880 Z"
            fill="#3B8FC4"
          />

          {/* cartão creme com o texto */}
          <path
            d="M620,188 C560,158 478,200 468,282 C458,362 500,382 490,462 C480,542 438,582 460,662 C482,742 562,782 642,762 C722,742 762,670 752,590 C744,520 782,480 792,410 C802,318 772,238 700,204 C670,188 650,198 620,188 Z"
            fill="#F3ECDE"
          />

          {/* foto mascarada */}
          <image
            href="https://placehold.co/700x800/e8a15c/ffffff?text=Foto"
            x="90"
            y="60"
            width="470"
            height="640"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#photoBlob)"
          />
        </svg>

        {/* tracinhos decorativos */}
        <svg
          viewBox="0 0 60 60"
          className="absolute w-14 h-14"
          style={{ left: "76%", top: "16%" }}
        >
          <line x1="8" y1="30" x2="14" y2="10" stroke="#12163B" strokeWidth="3" strokeLinecap="round" />
          <line x1="26" y1="34" x2="32" y2="12" stroke="#12163B" strokeWidth="3" strokeLinecap="round" />
          <line x1="44" y1="40" x2="50" y2="18" stroke="#12163B" strokeWidth="3" strokeLinecap="round" />
        </svg>

        {/* rabisco ondulado */}
        <svg
          viewBox="0 0 120 30"
          className="absolute w-28"
          style={{ left: "38%", top: "88%" }}
        >
          <path
            d="M2,20 C15,4 25,4 38,20 C51,36 61,36 74,20 C87,4 97,4 110,20"
            stroke="#12163B"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* texto sobre o cartão creme */}
        <div
          className="absolute flex flex-col gap-4 text-[#12163B]"
          style={{ left: "58%", top: "40%", width: "30%" }}
        >
          <p className="text-lg md:text-xl font-medium">Conhecimento prático.</p>
          <p className="text-lg md:text-xl font-medium">Projetos reais.</p>
          <div>
            <p className="text-lg md:text-xl font-medium">Crescimento real.</p>
            <svg viewBox="0 0 140 12" className="w-28 mt-1">
              <path
                d="M2,8 C30,2 90,2 138,7"
                stroke="#3B8FC4"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
export type Locale = "en" | "vi";

export const locales: Locale[] = ["en", "vi"];
export const defaultLocale: Locale = "en";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    work: string;
    services: string;
    resume: string;
    faq: string;
    contact: string;
    menu: string;
    close: string;
    closeMenu: string;
    closeForm: string;
    social: string;
    primary: string;
  };
  common: {
    writeEmail: string;
    contactForm: string;
    getInTouch: string;
    view: string;
    readMore: string;
    langSwitch: string;
  };
  form: {
    title: string;
    name: string;
    email: string;
    note: string;
    send: string;
    subjectWithName: string;
    subjectFallback: string;
    mailName: string;
    mailEmail: string;
  };
  hero: {
    title: string;
    lead: string;
    imageAlt: string;
  };
  about: {
    label: string;
    p1: string;
    p2: string;
    note: string;
  };
  work: {
    title: string;
    lead: string;
    items: {
      name: string;
      blurb: string;
      alt: string;
      image: string;
    }[];
  };
  band: {
    title: string;
    lead: string;
    imageAlt: string;
    videoAlt: string;
    play: string;
    pause: string;
    mute: string;
    unmute: string;
    timeline: string;
    volume: string;
    fullscreen: string;
    exitFullscreen: string;
  };
  services: {
    title: string;
    lead: string;
    emptyPrompt: string;
    contactMe: string;
    items: {
      title: string;
      body: string;
      items: string[];
    }[];
  };
  resume: {
    title: string;
    lead: string;
    items: {
      org: string;
      role: string;
      dates: string;
      body: string;
    }[];
  };
  faq: {
    title: string;
    lead: string;
    items: {
      q: string;
      title: string;
      a: string;
    }[];
  };
  cta: {
    title: string;
    lead: string;
  };
  footer: {
    legal: string;
  };
};

const en: Dictionary = {
  meta: {
    title: "Việt · Marketing & growth",
    description:
      "Personal brand of Việt: marketing and growth with clear stories and steady pipelines.",
  },
  nav: {
    work: "Work",
    services: "Services",
    resume: "Resume",
    faq: "FAQ",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    closeMenu: "Close menu",
    closeForm: "Close contact form",
    social: "Social",
    primary: "Primary",
  },
  common: {
    writeEmail: "Write an Email",
    contactForm: "Contact via Form",
    getInTouch: "Get in Touch",
    view: "View",
    readMore: "Read More",
    langSwitch: "Language",
  },
  form: {
    title: "Hello, I'd love to hear from you",
    name: "Name",
    email: "Email",
    note: "What are we building?",
    send: "Send Message",
    subjectWithName: "Project with {name}",
    subjectFallback: "Project enquiry",
    mailName: "Name",
    mailEmail: "Email",
  },
  hero: {
    title: "Stories that move pipelines.",
    lead: "Marketing and growth for teams in Ho Chi Minh City that sell without looking loud.",
    imageAlt: "Desk with tablet sketches in orange and black",
  },
  about: {
    label: "About",
    p1: "As a marketer and growth partner I help companies connect a real offer to an audience and grow the pipeline behind it.",
    p2: "Projects can sit directly with founders or beside agencies and studios. The constant is clear stories and steady follow-through.",
    note: "Less theatre. More motion between the first click and the first call.",
  },
  work: {
    title: "Selected Work.",
    lead: "A short ledger of launches, trials, and enablement, each one aimed at a pipeline that needed to move.",
    items: [
      {
        name: "Northline launch",
        blurb:
          "Go-to-market story and demand path for a product that needed quieter proof, not louder ads.",
        alt: "Launch desk with storyboards and a bright orange note for Northline",
        image: "/images/ai/work-northline.jpg",
      },
      {
        name: "Quiet Room trial",
        blurb:
          "Trial funnel and nurture that kept the offer calm while the pipeline stayed warm.",
        alt: "Sunlit quiet meeting room used for the Quiet Room trial mood",
        image: "/images/ai/work-quiet-room.jpg",
      },
      {
        name: "Atlas partner day",
        blurb:
          "Sales enablement kit and day-of narrative for partners bringing new accounts in.",
        alt: "Open terrace under blue sky for Atlas partner day",
        image: "/images/ai/work-atlas.jpg",
      },
      {
        name: "Signal desk refresh",
        blurb: "Lifecycle rewrite for a desk team stuck between alerts and answers.",
        alt: "Night operations desk with soft monitors for Signal desk refresh",
        image: "/images/ai/work-signal.jpg",
      },
      {
        name: "Paper Route relaunch",
        blurb: "Brand story and launch sequence for a small team returning to market.",
        alt: "Printed brand materials and an orange seal for Paper Route",
        image: "/images/ai/work-paper-route.jpg",
      },
      {
        name: "Harbor field notes",
        blurb:
          "Field narrative and follow-up system for a sales crew that lives on the road.",
        alt: "Harbor road at golden hour for Harbor field notes",
        image: "/images/ai/work-harbor.jpg",
      },
    ],
  },
  band: {
    title: "Built for the messy middle.",
    lead: "Between the first click and the first call is where most stories go quiet. That stretch is the job.",
    imageAlt: "Ho Chi Minh City skyline across the river at late afternoon",
    videoAlt: "Introduction clip for the real estate brand story",
    play: "Play video",
    pause: "Pause video",
    mute: "Mute video",
    unmute: "Unmute video",
    timeline: "Video timeline",
    volume: "Volume",
    fullscreen: "Full screen",
    exitFullscreen: "Exit full screen",
  },
  services: {
    title: "Services That I Do.",
    lead: "Four ways to hire the same habit: say the offer plainly, then keep the path to a conversation open.",
    emptyPrompt: "Don't find what you are looking for?",
    contactMe: "Contact Me.",
    items: [
      {
        title: "Brand story.",
        body: "A clear offer people can finish reading, then repeat without you in the room.",
        items: ["Positioning", "Narrative spine", "Launch line", "Messaging"],
      },
      {
        title: "Go-to-market.",
        body: "The path from first look to first conversation, mapped for the team that runs it.",
        items: ["Campaign shape", "Channel plan", "Launch cadence", "Offer page"],
      },
      {
        title: "Demand & lifecycle.",
        body: "Follow-ups that sound human and still move a lead toward a yes.",
        items: ["Nurture", "Trial paths", "Win-back", "Lifecycle copy"],
      },
      {
        title: "Sales enablement.",
        body: "Talk tracks, decks, and one-pagers sales can actually open mid-call.",
        items: ["Partner kits", "Demo scripts", "Proof packs", "Field notes"],
      },
    ],
  },
  resume: {
    title: "Resume, My Story.",
    lead: "A short path from studio writing to growth seats that still care how the sentence lands.",
    items: [
      {
        org: "Independent",
        role: "Marketing & growth",
        dates: "2024 – Present",
        body: "Campaigns, enablement, and the messy middle where a lead decides to talk, for teams that want motion without theatre.",
      },
      {
        org: "Growth desk",
        role: "Demand lead",
        dates: "2021 – 2024",
        body: "Owned trial and nurture systems, partnered with sales on follow-up, and kept the story consistent from ad to close.",
      },
      {
        org: "Studio Fold",
        role: "Brand & content",
        dates: "2018 – 2021",
        body: "Wrote and shaped brand stories for product launches, then stayed through the first ninety days of follow-through.",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    lead: "Straight answers on how we work, revise, and decide if the budget can buy the outcome.",
    items: [
      {
        q: "How do we start?",
        title: "My workflow",
        a: "A short call to name the offer, the audience, and the next ninety days. If it fits, we agree a scope and a single owner on your side.",
      },
      {
        q: "Do you only write, or ship the work?",
        title: "Build vs brief",
        a: "Both. I can hand off a clear brief, or stay through build with your designers, media buyers, and sales lead.",
      },
      {
        q: "How many revision rounds?",
        title: "Revisions",
        a: "Two focused rounds are built into every engagement. Extra rounds are fine when the offer itself changes.",
      },
      {
        q: "Can you work with our agency?",
        title: "Collab",
        a: "Yes. Often as the narrative spine while another studio handles craft or media. One story, fewer collisions.",
      },
      {
        q: "What about budget?",
        title: "The budget",
        a: "Project fees start from a defined scope, not hourly theatre. I will say no early if the budget cannot buy the outcome.",
      },
    ],
  },
  cta: {
    title: "Let's Work Together.",
    lead: "Tell me the offer, the audience, and the next ninety days. I will answer with a clear yes, no, or not yet.",
  },
  footer: {
    legal:
      "Imagery generated as stand-ins. Replace with your own portraits and campaign stills when ready. © 2026",
  },
};

const vi: Dictionary = {
  meta: {
    title: "Việt · Marketing & tăng trưởng",
    description:
      "Thương hiệu cá nhân của Việt: marketing và tăng trưởng với câu chuyện rõ ràng cùng đường dẫn khách hàng ổn định.",
  },
  nav: {
    work: "Dự án",
    services: "Dịch vụ",
    resume: "Hồ sơ",
    faq: "Hỏi đáp",
    contact: "Liên hệ",
    menu: "Menu",
    close: "Đóng",
    closeMenu: "Đóng menu",
    closeForm: "Đóng form liên hệ",
    social: "Mạng xã hội",
    primary: "Điều hướng chính",
  },
  common: {
    writeEmail: "Gửi email",
    contactForm: "Liên hệ qua form",
    getInTouch: "Liên hệ",
    view: "Xem",
    readMore: "Xem thêm",
    langSwitch: "Ngôn ngữ",
  },
  form: {
    title: "Xin chào, rất mong được nghe từ bạn",
    name: "Họ tên",
    email: "Email",
    note: "Chúng ta đang xây dựng điều gì?",
    send: "Gửi tin nhắn",
    subjectWithName: "Dự án cùng {name}",
    subjectFallback: "Trao đổi dự án",
    mailName: "Họ tên",
    mailEmail: "Email",
  },
  hero: {
    title: "Câu chuyện làm chuyển động đường dẫn khách hàng.",
    lead: "Marketing và tăng trưởng cho các đội ngũ tại TP. Hồ Chí Minh — bán hàng chắc tay mà không cần ồn ào.",
    imageAlt: "Bàn làm việc với bản phác thảo trên tablet, tông cam và đen",
  },
  about: {
    label: "Giới thiệu",
    p1: "Với vai trò đối tác marketing và tăng trưởng, tôi giúp doanh nghiệp gắn một đề xuất giá trị thật với đúng đối tượng, rồi mở rộng đường dẫn khách hàng phía sau đó.",
    p2: "Dự án có thể làm việc trực tiếp với founder, hoặc song hành cùng agency và studio. Điều không đổi: câu chuyện rõ ràng và sự theo sát đều đặn.",
    note: "Ít sân khấu. Nhiều chuyển động giữa cú nhấp đầu tiên và cuộc gọi đầu tiên.",
  },
  work: {
    title: "Dự án tiêu biểu.",
    lead: "Một nhật ký ngắn về các lần ra mắt, thử nghiệm và hỗ trợ bán hàng — mỗi hạng mục nhằm vào một đường dẫn khách hàng cần được đẩy tới.",
    items: [
      {
        name: "Northline launch",
        blurb:
          "Câu chuyện ra thị trường và lộ trình tạo nhu cầu cho sản phẩm cần bằng chứng vững hơn, không phải quảng cáo to hơn.",
        alt: "Bàn ra mắt với storyboard và ghi chú cam nổi bật cho Northline",
        image: "/images/ai/work-northline.jpg",
      },
      {
        name: "Quiet Room trial",
        blurb:
          "Phễu dùng thử và nurture giữ đề xuất êm dịu, trong khi đường dẫn khách hàng vẫn nóng.",
        alt: "Phòng họp yên tĩnh, ánh sáng ban ngày — mood cho Quiet Room trial",
        image: "/images/ai/work-quiet-room.jpg",
      },
      {
        name: "Atlas partner day",
        blurb:
          "Bộ tài liệu hỗ trợ bán hàng và kịch bản trong ngày dành cho đối tác mang tài khoản mới về.",
        alt: "Sân thượng mở dưới bầu trời xanh cho Atlas partner day",
        image: "/images/ai/work-atlas.jpg",
      },
      {
        name: "Signal desk refresh",
        blurb:
          "Viết lại hành trình vòng đời cho đội vận hành đang kẹt giữa cảnh báo và câu trả lời.",
        alt: "Bàn vận hành ban đêm với màn hình dịu ánh cho Signal desk refresh",
        image: "/images/ai/work-signal.jpg",
      },
      {
        name: "Paper Route relaunch",
        blurb:
          "Câu chuyện thương hiệu và chuỗi bước ra mắt cho đội nhỏ quay lại thị trường.",
        alt: "Ấn phẩm thương hiệu in và dấu niêm phong cam cho Paper Route",
        image: "/images/ai/work-paper-route.jpg",
      },
      {
        name: "Harbor field notes",
        blurb:
          "Tường thuật thực địa và hệ thống theo dõi dành cho đội bán hàng sống trên đường.",
        alt: "Đường ven cảng lúc giờ vàng cho Harbor field notes",
        image: "/images/ai/work-harbor.jpg",
      },
    ],
  },
  band: {
    title: "Dành cho đoạn giữa rối rắm.",
    lead: "Giữa cú nhấp đầu tiên và cuộc gọi đầu tiên là nơi hầu hết câu chuyện tắt tiếng. Đoạn đường đó chính là công việc.",
    imageAlt: "Skyline TP. Hồ Chí Minh nhìn qua sông vào buổi chiều muộn",
    videoAlt: "Video giới thiệu câu chuyện thương hiệu bất động sản",
    play: "Phát video",
    pause: "Tạm dừng video",
    mute: "Tắt tiếng video",
    unmute: "Bật tiếng video",
    timeline: "Tua video",
    volume: "Âm lượng",
    fullscreen: "Toàn màn hình",
    exitFullscreen: "Thoát toàn màn hình",
  },
  services: {
    title: "Dịch vụ tôi đảm nhận.",
    lead: "Bốn cách thuê cùng một thói quen: nói rõ đề xuất, rồi giữ lối tới cuộc hội thoại luôn mở.",
    emptyPrompt: "Chưa thấy điều bạn cần?",
    contactMe: "Liên hệ tôi.",
    items: [
      {
        title: "Câu chuyện thương hiệu.",
        body: "Một đề xuất đủ rõ để người đọc hiểu hết — rồi nhắc lại được khi bạn không còn trong phòng.",
        items: [
          "Định vị",
          "Trục tường thuật",
          "Dòng ra mắt",
          "Hệ thông điệp",
        ],
      },
      {
        title: "Ra thị trường.",
        body: "Lộ trình từ lần nhìn đầu tiên tới cuộc trò chuyện đầu tiên, được vẽ cho đội sẽ vận hành nó.",
        items: [
          "Hình dạng chiến dịch",
          "Kế hoạch kênh",
          "Nhịp ra mắt",
          "Trang đề xuất",
        ],
      },
      {
        title: "Nhu cầu & vòng đời.",
        body: "Các bước theo dõi nghe như người thật, nhưng vẫn đưa lead tiến gần hơn tới một câu đồng ý.",
        items: [
          "Nurture",
          "Lộ trình dùng thử",
          "Win-back",
          "Nội dung vòng đời",
        ],
      },
      {
        title: "Hỗ trợ bán hàng.",
        body: "Talk track, deck và one-pager mà đội sales thực sự mở được giữa cuộc gọi.",
        items: [
          "Bộ đối tác",
          "Kịch bản demo",
          "Gói bằng chứng",
          "Ghi chú thực địa",
        ],
      },
    ],
  },
  resume: {
    title: "Hồ sơ, câu chuyện của tôi.",
    lead: "Một hành trình ngắn từ viết ở studio tới ghế tăng trưởng — nơi câu chữ vẫn phải đáp đúng chỗ.",
    items: [
      {
        org: "Độc lập",
        role: "Marketing & tăng trưởng",
        dates: "2024 – Hiện tại",
        body: "Chiến dịch, hỗ trợ bán hàng, và đoạn giữa rối rắm nơi lead quyết định có mở lời — dành cho đội muốn chuyển động mà không cần sân khấu.",
      },
      {
        org: "Growth desk",
        role: "Phụ trách nhu cầu",
        dates: "2021 – 2024",
        body: "Phụ trách hệ thống dùng thử và nurture, phối hợp sales trong bước theo dõi, và giữ câu chuyện nhất quán từ quảng cáo tới chốt deal.",
      },
      {
        org: "Studio Fold",
        role: "Thương hiệu & nội dung",
        dates: "2018 – 2021",
        body: "Viết và định hình câu chuyện thương hiệu cho các lần ra mắt sản phẩm, rồi ở lại suốt chín mươi ngày theo sát đầu tiên.",
      },
    ],
  },
  faq: {
    title: "Câu hỏi thường gặp",
    lead: "Trả lời thẳng về cách làm việc, chỉnh sửa, và khi nào ngân sách đủ để đổi lấy kết quả.",
    items: [
      {
        q: "Bắt đầu thế nào?",
        title: "Quy trình của tôi",
        a: "Một cuộc gọi ngắn để nêu rõ đề xuất, đối tượng và chín mươi ngày tới. Nếu khớp, hai bên chốt phạm vi và một đầu mối duy nhất phía bạn.",
      },
      {
        q: "Chỉ viết, hay cùng triển khai?",
        title: "Brief hay build",
        a: "Cả hai. Tôi có thể bàn giao brief rõ ràng, hoặc ở lại xuyên suốt giai đoạn build cùng designer, media buyer và đầu mối sales của bạn.",
      },
      {
        q: "Bao nhiêu vòng chỉnh sửa?",
        title: "Chỉnh sửa",
        a: "Mỗi hợp tác đã gồm hai vòng chỉnh sửa tập trung. Vòng thêm vẫn ổn khi chính đề xuất thay đổi.",
      },
      {
        q: "Có thể làm việc với agency của chúng tôi?",
        title: "Phối hợp",
        a: "Có. Thường với vai trò trục tường thuật, trong khi studio khác lo phần craft hoặc media. Một câu chuyện, ít va chạm hơn.",
      },
      {
        q: "Còn ngân sách thì sao?",
        title: "Ngân sách",
        a: "Phí dự án xuất phát từ phạm vi đã định, không phải sân khấu tính giờ. Tôi sẽ nói không sớm nếu ngân sách không mua được kết quả.",
      },
    ],
  },
  cta: {
    title: "Cùng làm việc.",
    lead: "Hãy cho tôi biết đề xuất, đối tượng và chín mươi ngày tới. Tôi sẽ trả lời rõ: có, không, hoặc chưa phải lúc.",
  },
  footer: {
    legal:
      "Hình ảnh mang tính minh họa. Hãy thay bằng chân dung và ảnh chiến dịch thật khi sẵn sàng. © 2026",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, vi };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

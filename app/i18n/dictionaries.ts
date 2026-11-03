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
    detail: {
      back: string;
      client: string;
      year: string;
      services: string;
      overview: string;
      outcome: string;
      process: string;
      more: string;
    };
    items: {
      slug: string;
      name: string;
      blurb: string;
      alt: string;
      image: string;
      client: string;
      year: string;
      tags: string[];
      overview: string[];
      stats: { value: string; label: string }[];
      phases: { title: string; body: string }[];
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
  contact: {
    title: string;
    lead: string;
    emailLabel: string;
    socialLabel: string;
    availability: string;
    availabilityValue: string;
    response: string;
  };
  footer: {
    legal: string;
    backToTop: string;
  };
  notFound: {
    title: string;
    body: string;
    back: string;
  };
};

const en: Dictionary = {
  meta: {
    title: "Việt · PML · Marketing & growth",
    description:
      "Personal brand of Việt (PML): marketing and growth with clear stories and steady pipelines.",
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
    detail: {
      back: "All work",
      client: "Client",
      year: "Year",
      services: "Services",
      overview: "The brief.",
      outcome: "What moved.",
      process: "How it ran.",
      more: "More work.",
    },
    items: [
      {
        slug: "northline-launch",
        name: "Northline launch",
        blurb:
          "Go-to-market story and demand path for a product that needed quieter proof, not louder ads.",
        alt: "Launch desk with storyboards and a bright orange note for Northline",
        image: "/images/ai/work-northline.jpg",
        client: "Northline Logistics",
        year: "2025",
        tags: ["Positioning", "Launch narrative", "Demand path"],
        overview: [
          "Northline had a product that performed quietly and a market that only noticed volume. The brief was to make proof, not noise, the story.",
          "We rebuilt the offer around what operations teams could verify in the first week, then mapped a demand path that led with evidence instead of adjectives.",
        ],
        stats: [
          { value: "3×", label: "Qualified pipeline in two quarters" },
          { value: "11 days", label: "Median time to first call" },
          { value: "42%", label: "Of launches sourced from proof content" },
        ],
        phases: [
          {
            title: "Name the proof",
            body: "Interviews with eight operations leads turned scattered wins into one verifiable claim the whole company could repeat.",
          },
          {
            title: "Build the path",
            body: "A single offer page, a proof pack, and a four-step outreach cadence — each step handing sales something the prospect could check.",
          },
          {
            title: "Launch and listen",
            body: "We shipped in weekly increments, watched which claims carried calls, and cut everything that only carried clicks.",
          },
        ],
      },
      {
        slug: "quiet-room-trial",
        name: "Quiet Room trial",
        blurb:
          "Trial funnel and nurture that kept the offer calm while the pipeline stayed warm.",
        alt: "Sunlit quiet meeting room used for the Quiet Room trial mood",
        image: "/images/ai/work-quiet-room.jpg",
        client: "Quiet Room",
        year: "2025",
        tags: ["Trial funnel", "Nurture", "Lifecycle copy"],
        overview: [
          "A calm product with a leaky trial: people signed up, looked around, and left before the value landed. The fix was pacing, not persuasion.",
          "We redesigned the first ten days so every message arrived exactly when the product had earned the right to say something.",
        ],
        stats: [
          { value: "+38%", label: "Trial-to-paid conversion" },
          { value: "6", label: "Messages in the core nurture" },
          { value: "−24%", label: "Unsubscribes during trial" },
        ],
        phases: [
          {
            title: "Map the drop-off",
            body: "We followed fifty trial accounts day by day and found the quiet moments where momentum died — usually right after a feature they never asked for.",
          },
          {
            title: "Slow the pitch",
            body: "Three of seven emails were cut. The rest were rewritten to arrive after a milestone, not on a schedule.",
          },
          {
            title: "Guard the tone",
            body: "A one-page voice guide kept every follow-up as calm as the product itself, even after handoff.",
          },
        ],
      },
      {
        slug: "atlas-partner-day",
        name: "Atlas partner day",
        blurb:
          "Sales enablement kit and day-of narrative for partners bringing new accounts in.",
        alt: "Open terrace under blue sky for Atlas partner day",
        image: "/images/ai/work-atlas.jpg",
        client: "Atlas Cloud",
        year: "2024",
        tags: ["Partner kit", "Demo script", "Event narrative"],
        overview: [
          "Atlas's partner day had slides and swag but no spine. Partners left entertained and unsure what to sell on Monday.",
          "We wrote one narrative for the day and hung every kit, script, and talk on it — so partners left with a story they could retell.",
        ],
        stats: [
          { value: "57", label: "Partners trained in one day" },
          { value: "2.4×", label: "Partner-sourced demos next quarter" },
          { value: "9 min", label: "Average demo, down from 25" },
        ],
        phases: [
          {
            title: "One spine",
            body: "A three-line storyline — problem, proof, first step — that every slide and one-pager had to serve.",
          },
          {
            title: "Kits that fit the call",
            body: "Each partner kit fit inside a real sales call: open, show, prove, next step. Nothing needed a second meeting to explain.",
          },
          {
            title: "Rehearse the retell",
            body: "Partners practiced the story on each other before lunch. If it survived that retelling, it was ready.",
          },
        ],
      },
      {
        slug: "signal-desk-refresh",
        name: "Signal desk refresh",
        blurb: "Lifecycle rewrite for a desk team stuck between alerts and answers.",
        alt: "Night operations desk with soft monitors for Signal desk refresh",
        image: "/images/ai/work-signal.jpg",
        client: "Signal",
        year: "2024",
        tags: ["Lifecycle", "Messaging", "Handoff"],
        overview: [
          "Signal's desk team lived between two failures: alerts nobody read and answers that arrived too late. The words in between were the bottleneck.",
          "We rewrote the lifecycle end to end — fewer alerts, plainer answers, and a handoff that told sales what already happened instead of asking.",
        ],
        stats: [
          { value: "−31%", label: "Alert volume, same coverage" },
          { value: "90 sec", label: "Median alert-to-answer" },
          { value: "4", label: "Handoff fields sales actually reads" },
        ],
        phases: [
          {
            title: "Audit the noise",
            body: "Two weeks of shadowing showed which alerts changed decisions and which only changed screens.",
          },
          {
            title: "Rewrite in verbs",
            body: "Every lifecycle message now starts with what to do, carries its own evidence, and names the owner.",
          },
          {
            title: "Tighten the handoff",
            body: "The brief to sales shrank to four fields that always matter. Anything else became an optional note.",
          },
        ],
      },
      {
        slug: "paper-route-relaunch",
        name: "Paper Route relaunch",
        blurb: "Brand story and launch sequence for a small team returning to market.",
        alt: "Printed brand materials and an orange seal for Paper Route",
        image: "/images/ai/work-paper-route.jpg",
        client: "Paper Route",
        year: "2023",
        tags: ["Brand story", "Launch cadence", "Offer page"],
        overview: [
          "A small team returning to market after a quiet year. The risk was sounding like a comeback; the goal was sounding like continuity.",
          "We told the return as the next issue, not the new issue — same promise, sharper proof, and a launch cadence that respected old readers.",
        ],
        stats: [
          { value: "68%", label: "Of lapsed readers re-engaged" },
          { value: "12 days", label: "From announce to first sale" },
          { value: "1", label: "Offer page, five sections, no carousel" },
        ],
        phases: [
          {
            title: "Find the through-line",
            body: "Archived issues showed the promise had never changed — only the proof had grown. We led with that.",
          },
          {
            title: "Sequence the return",
            body: "A four-note cadence: remember, show, invite, open. Each note earned the next.",
          },
          {
            title: "Ship one page",
            body: "The relaunch lived on a single page that answered every question a lapsed reader had, in order.",
          },
        ],
      },
      {
        slug: "harbor-field-notes",
        name: "Harbor field notes",
        blurb:
          "Field narrative and follow-up system for a sales crew that lives on the road.",
        alt: "Harbor road at golden hour for Harbor field notes",
        image: "/images/ai/work-harbor.jpg",
        client: "Harbor",
        year: "2023",
        tags: ["Field narrative", "Follow-up system", "Playbook"],
        overview: [
          "Harbor's sales crew lived on the road and their follow-ups lived nowhere. Good conversations evaporated between visits.",
          "We built a field-notes system: a two-minute structure for capturing what a buyer actually said, and a route for where each note went next.",
        ],
        stats: [
          { value: "82%", label: "Visits with a same-day note" },
          { value: "2×", label: "Second meetings booked" },
          { value: "3 min", label: "To file a note from a cab" },
        ],
        phases: [
          {
            title: "Ride along",
            body: "A week on the road made the constraint obvious: any system longer than a voicemail was dead on arrival.",
          },
          {
            title: "Two-minute format",
            body: "Three prompts — heard, risk, next — turned a conversation into a note before the engine cooled.",
          },
          {
            title: "Route the notes",
            body: "Notes flowed to the one person who could act, with a line already drafted. Follow-up stopped depending on memory.",
          },
        ],
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
  contact: {
    title: "Let's talk.",
    lead: "Tell me the offer, the audience, and the next ninety days. The form lands in my inbox, and I answer with a clear yes, no, or not yet.",
    emailLabel: "Prefer email?",
    socialLabel: "Elsewhere",
    availability: "Availability",
    availabilityValue: "Booking projects for next quarter",
    response: "Replies within two working days.",
  },
  footer: {
    legal:
      "© 2026",
    backToTop: "Back to top",
  },
  notFound: {
    title: "Page not found.",
    body: "The page you are looking for moved, or never shipped. The work ledger is the best place to pick the trail back up.",
    back: "Back to all work",
  },
};

const vi: Dictionary = {
  meta: {
    title: "Việt · PML · Marketing & tăng trưởng",
    description:
      "Thương hiệu cá nhân của Việt (PML): marketing và tăng trưởng với câu chuyện rõ ràng cùng đường dẫn khách hàng ổn định.",
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
    detail: {
      back: "Tất cả dự án",
      client: "Khách hàng",
      year: "Năm",
      services: "Dịch vụ",
      overview: "Bài toán đặt ra.",
      outcome: "Kết quả.",
      process: "Cách triển khai.",
      more: "Dự án khác.",
    },
    items: [
      {
        slug: "northline-launch",
        name: "Northline launch",
        blurb:
          "Câu chuyện ra thị trường và lộ trình tạo nhu cầu cho sản phẩm cần bằng chứng vững hơn, không phải quảng cáo to hơn.",
        alt: "Bàn ra mắt với storyboard và ghi chú cam nổi bật cho Northline",
        image: "/images/ai/work-northline.jpg",
        client: "Northline Logistics",
        year: "2025",
        tags: ["Định vị", "Tường thuật ra mắt", "Lộ trình nhu cầu"],
        overview: [
          "Northline có một sản phẩm vận hành thầm lặng, trong khi thị trường chỉ chú ý tới sự ồn ào. Bài toán đặt ra: để bằng chứng — chứ không phải tiếng ồn — trở thành câu chuyện.",
          "Chúng tôi xây dựng lại đề xuất dựa trên những gì đội vận hành có thể tự kiểm chứng trong tuần đầu tiên, rồi vẽ lộ trình nhu cầu dẫn bằng câu dẫn bằng chứng thay vì tính từ.",
        ],
        stats: [
          { value: "3×", label: "Pipeline đủ điều kiện trong hai quý" },
          { value: "11 ngày", label: "Thời gian trung bình tới cuộc gọi đầu tiên" },
          { value: "42%", label: "Lượt ra mắt đến từ nội dung bằng chứng" },
        ],
        phases: [
          {
            title: "Đặt tên cho bằng chứng",
            body: "Phỏng vấn tám quản lý vận hành biến những thắng lợi rời rạc thành một tuyên bố có thể kiểm chứng mà cả công ty nhắc lại được.",
          },
          {
            title: "Dựng lộ trình",
            body: "Một trang đề xuất, một gói bằng chứng và nhịp tiếp cận bốn bước — mỗi bước đưa sales thứ gì đó prospect có thể tự xác nhận.",
          },
          {
            title: "Ra mắt và lắng nghe",
            body: "Chúng tôi triển khai theo tuần, quan sát tuyên bố nào mang lại cuộc gọi thật, và cắt mọi thứ chỉ mang lại cú nhấp.",
          },
        ],
      },
      {
        slug: "quiet-room-trial",
        name: "Quiet Room trial",
        blurb:
          "Phễu dùng thử và nurture giữ đề xuất êm dịu, trong khi đường dẫn khách hàng vẫn nóng.",
        alt: "Phòng họp yên tĩnh, ánh sáng ban ngày — mood cho Quiet Room trial",
        image: "/images/ai/work-quiet-room.jpg",
        client: "Quiet Room",
        year: "2025",
        tags: ["Phễu dùng thử", "Nurture", "Nội dung vòng đời"],
        overview: [
          "Một sản phẩm êm dịu với phễu dùng thử đang rò rỉ: người dùng đăng ký, nhìn quanh, rồi rời đi trước khi giá trị kịp hiện ra. Cách sửa là nhịp điệu, không phải thuyết phục.",
          "Chúng tôi thiết kế lại mười ngày đầu tiên để mỗi thông điệp đến đúng lúc sản phẩm vừa đủ xứng đáng để lên tiếng.",
        ],
        stats: [
          { value: "+38%", label: "Tỷ lệ dùng thử chuyển thành trả phí" },
          { value: "6", label: "Thông điệp trong nurture cốt lõi" },
          { value: "−24%", label: "Lượt hủy đăng ký trong giai đoạn dùng thử" },
        ],
        phases: [
          {
            title: "Vẽ bản đồ điểm rơi",
            body: "Chúng tôi theo năm mươi tài khoản dùng thử từng ngày và tìm thấy những khoảng lặng nơi đà tăng chết — thường ngay sau một tính năng họ chưa từng cần.",
          },
          {
            title: "Chậm lời chào hàng",
            body: "Ba trong bảy email bị cắt. Phần còn lại được viết lại để đến sau một cột mốc, chứ không theo lịch cố định.",
          },
          {
            title: "Giữ giọng điệu",
            body: "Một trang hướng dẫn giọng nói giữ mọi bước theo dõi êm dịu như chính sản phẩm, kể cả sau khi bàn giao.",
          },
        ],
      },
      {
        slug: "atlas-partner-day",
        name: "Atlas partner day",
        blurb:
          "Bộ tài liệu hỗ trợ bán hàng và kịch bản trong ngày dành cho đối tác mang tài khoản mới về.",
        alt: "Sân thượng mở dưới bầu trời xanh cho Atlas partner day",
        image: "/images/ai/work-atlas.jpg",
        client: "Atlas Cloud",
        year: "2024",
        tags: ["Bộ đối tác", "Kịch bản demo", "Tường thuật sự kiện"],
        overview: [
          "Ngày hội đối tác của Atlas có slide và quà tặng nhưng thiếu trục xương sống. Đối tác ra về trong sự thích thú, còn băn khoăn thứ Hai sẽ bán gì.",
          "Chúng tôi viết một tường thuật duy nhất cho cả ngày và treo mọi bộ tài liệu, kịch bản, bài phát biểu lên nó — để đối tác ra về với một câu chuyện có thể kể lại.",
        ],
        stats: [
          { value: "57", label: "Đối tác được đào tạo trong một ngày" },
          { value: "2.4×", label: "Demo từ đối tác trong quý tiếp theo" },
          { value: "9 phút", label: "Demo trung bình, giảm từ 25 phút" },
        ],
        phases: [
          {
            title: "Một trục duy nhất",
            body: "Mạch ba dòng — vấn đề, bằng chứng, bước đầu tiên — mà mọi slide và one-pager đều phải phục vụ.",
          },
          {
            title: "Bộ tài liệu vừa cuộc gọi",
            body: "Mỗi bộ đối tác nằm gọn trong một cuộc gọi sales thật: mở, trình bày, chứng minh, bước tiếp theo. Không thứ nào cần cuộc họp thứ hai để giải thích.",
          },
          {
            title: "Tập kể lại",
            body: "Các đối tác tập kể câu chuyện cho nhau trước giờ trưa. Câu chuyện sống sót qua lần kể lại đó nghĩa là đã sẵn sàng.",
          },
        ],
      },
      {
        slug: "signal-desk-refresh",
        name: "Signal desk refresh",
        blurb:
          "Viết lại hành trình vòng đời cho đội vận hành đang kẹt giữa cảnh báo và câu trả lời.",
        alt: "Bàn vận hành ban đêm với màn hình dịu ánh cho Signal desk refresh",
        image: "/images/ai/work-signal.jpg",
        client: "Signal",
        year: "2024",
        tags: ["Vòng đời", "Hệ thông điệp", "Bàn giao"],
        overview: [
          "Đội vận hành của Signal sống giữa hai thất bại: cảnh báo không ai đọc và câu trả lời đến quá muộn. Những con chữ ở giữa chính là điểm nghẽn.",
          "Chúng tôi viết lại toàn bộ vòng đời — ít cảnh báo hơn, câu trả lời rõ ràng hơn, và một bước bàn giao nói cho sales biết điều đã xảy ra thay vì phải hỏi.",
        ],
        stats: [
          { value: "−31%", label: "Lượng cảnh báo, độ phủ giữ nguyên" },
          { value: "90 giây", label: "Thời gian trung bình từ cảnh báo tới câu trả lời" },
          { value: "4", label: "Trường bàn giao mà sales thực sự đọc" },
        ],
        phases: [
          {
            title: "Kiểm toán tiếng ồn",
            body: "Hai tuần ngồi cùng đội cho thấy cảnh báo nào thay đổi quyết định và cảnh báo nào chỉ thay đổi màn hình.",
          },
          {
            title: "Viết lại bằng động từ",
            body: "Mọi thông điệp vòng đời giờ bắt đầu bằng việc cần làm, tự mang theo bằng chứng, và nêu rõ người phụ trách.",
          },
          {
            title: "Siết bước bàn giao",
            body: "Brief cho sales gọn lại còn bốn trường luôn quan trọng. Mọi thứ khác thành ghi chú tùy chọn.",
          },
        ],
      },
      {
        slug: "paper-route-relaunch",
        name: "Paper Route relaunch",
        blurb:
          "Câu chuyện thương hiệu và chuỗi bước ra mắt cho đội nhỏ quay lại thị trường.",
        alt: "Ấn phẩm thương hiệu in và dấu niêm phong cam cho Paper Route",
        image: "/images/ai/work-paper-route.jpg",
        client: "Paper Route",
        year: "2023",
        tags: ["Câu chuyện thương hiệu", "Nhịp ra mắt", "Trang đề xuất"],
        overview: [
          "Một đội nhỏ quay lại thị trường sau một năm im lặng. Rủi ro là nghe như một màn trở lại; mục tiêu là nghe như một sự liên tục.",
          "Chúng tôi kể cuộc quay lại như số tiếp theo, chứ không phải số mới — cùng lời hứa, bằng chứng sắc hơn, và nhịp ra mắt tôn trọng độc giả cũ.",
        ],
        stats: [
          { value: "68%", label: "Độc giả cũ được kết nối lại" },
          { value: "12 ngày", label: "Từ công bố tới đơn hàng đầu tiên" },
          { value: "1", label: "Trang đề xuất, năm phần, không carousel" },
        ],
        phases: [
          {
            title: "Tìm mạch xuyên suốt",
            body: "Những số báo cũ cho thấy lời hứa chưa từng đổi — chỉ có bằng chứng là lớn dần. Chúng tôi dẫn đầu bằng điều đó.",
          },
          {
            title: "Xếp nhịp trở lại",
            body: "Nhịp bốn nốt: nhớ lại, cho thấy, mời gọi, mở cửa. Mỗi nốt xứng đáng với nốt kế tiếp.",
          },
          {
            title: "Đóng gói một trang",
            body: "Toàn bộ màn ra mắt sống trên một trang duy nhất, lần lượt trả lời mọi câu hỏi của độc giả cũ.",
          },
        ],
      },
      {
        slug: "harbor-field-notes",
        name: "Harbor field notes",
        blurb:
          "Tường thuật thực địa và hệ thống theo dõi dành cho đội bán hàng sống trên đường.",
        alt: "Đường ven cảng lúc giờ vàng cho Harbor field notes",
        image: "/images/ai/work-harbor.jpg",
        client: "Harbor",
        year: "2023",
        tags: ["Tường thuật thực địa", "Hệ thống theo dõi", "Playbook"],
        overview: [
          "Đội sales của Harbor sống trên đường và các bước theo dõi của họ không sống ở đâu cả. Những cuộc trò chuyện tốt bốc hơi giữa các chuyến đi.",
          "Chúng tôi dựng hệ thống ghi chú thực địa: một cấu trúc hai phút để ghi lại điều buyer thực sự nói, và một lộ trình cho mỗi ghi chú tiếp theo đi đâu.",
        ],
        stats: [
          { value: "82%", label: "Lượt ghé thăm có ghi chú trong ngày" },
          { value: "2×", label: "Cuộc họp thứ hai được đặt lịch" },
          { value: "3 phút", label: "Để lưu một ghi chú trên xe" },
        ],
        phases: [
          {
            title: "Đi cùng thực địa",
            body: "Một tuần trên đường cho thấy giới hạn rõ ràng: hệ thống nào dài hơn một tin nhắn thoại là chết từ trong trứng.",
          },
          {
            title: "Cấu trúc hai phút",
            body: "Ba câu hỏi — nghe được, rủi ro, bước tiếp — biến một cuộc trò chuyện thành ghi chú trước khi máy nguội.",
          },
          {
            title: "Điều hướng ghi chú",
            body: "Ghi chú chảy tới đúng một người có thể hành động, kèm dòng chữ đã soạn sẵn. Việc theo dõi không còn dựa vào trí nhớ.",
          },
        ],
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
  contact: {
    title: "Cùng trao đổi.",
    lead: "Hãy cho tôi biết đề xuất, đối tượng và chín mươi ngày tới. Form sẽ gửi thẳng tới hộp thư của tôi, và tôi sẽ trả lời rõ: có, không, hoặc chưa phải lúc.",
    emailLabel: "Thích gửi email?",
    socialLabel: "Mạng xã hội",
    availability: "Lịch làm việc",
    availabilityValue: "Đang nhận dự án cho quý tới",
    response: "Phản hồi trong vòng hai ngày làm việc.",
  },
  footer: {
    legal:
      "Hình ảnh mang tính minh họa. Hãy thay bằng chân dung và ảnh chiến dịch thật khi sẵn sàng. © 2026",
    backToTop: "Lên đầu trang",
  },
  notFound: {
    title: "Không tìm thấy trang.",
    body: "Trang bạn tìm đã đổi địa chỉ, hoặc chưa từng được triển khai. Danh sách dự án là nơi tốt nhất để tìm lại dấu vết.",
    back: "Về tất cả dự án",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, vi };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

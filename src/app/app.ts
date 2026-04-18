import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

type GradeKey = 'grade1' | 'grade2' | 'grade3' | 'grade4' | 'grade5';

interface NavGradeItem {
  key: GradeKey;
  name: string;
  short: string;
  desc: string;
}

interface Program {
  label: string;
  title: string;
  desc: string;
  focus: string;
  topics: string[];
}

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

interface MethodItem {
  title: string;
  desc: string;
}

interface TestimonialItem {
  initials: string;
  name: string;
  grade: string;
  quote: string;
  featured?: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  activeGrade: GradeKey = 'grade1';
  openFaqIndex = 0;
  showScrollTop = false;
  isScrolled = false;

  readonly navGrades: NavGradeItem[] = [
    {
      key: 'grade1',
      name: 'Lớp 1',
      short: 'Nề nếp · Lễ phép · Tự lập',
      desc: 'Nề nếp, lễ phép, an toàn và thói quen tự phục vụ'
    },
    {
      key: 'grade2',
      name: 'Lớp 2',
      short: 'Tự nhận thức · Kỷ luật',
      desc: 'Tự nhận thức, cảm xúc, kỷ luật và kỹ năng hợp tác'
    },
    {
      key: 'grade3',
      name: 'Lớp 3',
      short: 'Tự tin · Biết ơn · Mục tiêu',
      desc: 'Tự tin, biết ơn, mục tiêu và ứng xử tích cực'
    },
    {
      key: 'grade4',
      name: 'Lớp 4',
      short: 'Giao tiếp · Chủ động · Kỹ năng số',
      desc: 'Giao tiếp, chủ động, cảm xúc và kỹ năng số'
    },
    {
      key: 'grade5',
      name: 'Lớp 5',
      short: 'Bản lĩnh · Tự học · Chuyển cấp',
      desc: 'Bản lĩnh, tự học, phản biện và sẵn sàng chuyển cấp'
    }
  ];

  readonly programs: Record<GradeKey, Program> = {
    grade1: {
      label: 'Chương trình Lớp 1',
      title: 'Xây nền nếp, lễ phép, an toàn và thói quen tự phục vụ',
      desc: 'Dành cho trẻ mới vào tiểu học, tập trung vào hành vi nền tảng và kỹ năng sống cơ bản.',
      focus: 'Nề nếp · Lễ phép · An toàn · Tự lập',
      topics: [
         'Chào hỏi thầy cô, anh chị và các bạn mới',
  'Làm quen bạn mới',
  'Lễ phép với thầy cô giáo',
  'Em với nội quy trường, lớp',
  'Học vui vẻ, chơi an toàn',
  'Sắp xếp ngăn nắp góc học tập',
  'Thời gian biểu của em',
  'Giữ gìn sách vở, đồ dùng học tập',
  'Chăm sóc răng miệng',
  'Lựa chọn trang phục phù hợp',
  'Tập nói lời chúc phù hợp',
  'Tập nói lời động viên, khen ngợi',
  'Đáp lời yêu thương',
  'Giúp đỡ việc nhà',
  'Chuẩn bị sách vở, đồ dùng đến trường',
  'Giữ nhà cửa sạch sẽ, gọn gàng',
  'Nhận biết cảm xúc của người thân',
  'Em hiểu về trách nhiệm',
  'Chia sẻ để yêu thương',
  'Em là người trung thực',
  'Trả lại của rơi',
  'Nói lời cảm ơn, xin lỗi',
  'Phòng tránh bị ngã',
  'Phòng tránh bị thương do vật sắc nhọn',
  'Làm gì khi bị thương',
  'Phòng tránh bị bỏng',
  'Phòng tránh điện giật',
  'Nhận biết bạo lực học đường',
  'Phòng tránh bị bắt nạt',
  'Cách gọi và nhận cuộc gọi điện thoại',
  'Mô tả hình dáng bên ngoài',
  'Nhận diện cảm xúc',
  'Thể hiện cảm xúc khác nhau',
  'Tạo tinh thần thoải mái',
  'Phòng tránh nguy cơ bị xâm hại tình dục'
      ]
    },
    grade2: {
      label: 'Chương trình Lớp 2',
      title: 'Phát triển tự nhận thức, cảm xúc và trách nhiệm cá nhân',
      desc: 'Giúp trẻ hiểu bản thân, tăng kỷ luật cá nhân, hợp tác tốt hơn và ứng xử an toàn hơn.',
      focus: 'Tự nhận thức · Cảm xúc · Kỷ luật · Hợp tác',
      topics: [
         'Xây dựng hình ảnh bản thân',
  'Em muốn trở thành ...',
  'Thể hiện cảm xúc bản thân',
  'Kiềm chế cảm xúc tiêu cực',
  'Rèn luyện nề nếp học tập và sinh hoạt',
  'Yêu quý bạn bè',
  'Bảo quản đồ dùng/ tài sản cá nhân',
  'Quản lý thời gian',
  'Tôn trọng sự khác biệt',
  'Chăm sóc người thân khi bị ốm',
  'Chăm sóc quần áo',
  'Kỹ năng hợp tác',
  'Tự động viên',
  'Kính trọng thầy cô giáo',
  'Lịch sự khi đề nghị giúp đỡ',
  'Mối quan hệ quanh em',
  'Giải quyết mâu thuẫn',
  'Tôn trọng quyền của người khác',
  'Trách nhiệm bản thân',
  'Khích lệ bạn bè',
  'Lập kế hoạch thực hiện một công việc',
  'Sở thích trong học tập',
  'Tập trung để học tốt',
  'Nhận lỗi và sửa lỗi',
  'Tránh nơi không an toàn',
  'Khi em bị đi lạc',
  'Ứng xử khi tiếp xúc với người lạ',
  'Sơ cứu, cấp cứu khi bị sốt',
  'Biết giữ lời hứa',
  'Nói không với bắt nạt',
  'Tham gia phương tiện giao thông công cộng',
  'Vượt qua sự hiểu lầm',
  'Xử lý sự cố trong thang máy',
  'Phòng tránh xâm hại cơ thể',
  'Vệ sinh đầu tóc',
  'Nhận biết vùng riêng tư',
  'Phân loại rác thải'
      ]
    },
    grade3: {
      label: 'Chương trình Lớp 3',
      title: 'Nuôi dưỡng tự tin, lòng biết ơn và năng lực ứng xử tích cực',
      desc: 'Giúp trẻ hiểu bản thân, biết đặt mục tiêu, giữ lời hứa và giao tiếp tích cực hơn.',
      focus: 'Tự tin · Biết ơn · Mục tiêu · Ứng xử',
      topics: [
        'Em tự tin',
  'Bày tỏ lòng biết ơn',
  'Khám phá bản thân (điểm mạnh, điểm yếu)',
  'Em hoàn thiện bản thân',
  'An toàn trong ăn uống',
  'Giải quyết những bất hòa với bạn bè',
  'Thuyết phục người khác',
  'Cách giải tỏa căng thẳng',
  'Xác định mục tiêu học tập phù hợp',
  'Quan tâm hàng xóm, láng giềng',
  'Ham học hỏi',
  'Tìm niềm vui trong học tập',
  'Để có người bạn thân',
  'Ứng xử văn minh trên phương tiện giao thông công',
  'Tuân thủ quy tắc an toàn giao thông',
  'Biết giữ lời hứa',
  'Kính yêu thầy cô',
  'Biết nói lời từ chối',
  'Chia sẻ yêu thương',
  'Dự án nuôi heo đất',
  'Tiết kiệm trong sử dụng điện, nước',
  'Nhận biết về tiền, quản lý tiền bạc',
  'Kỹ năng lắng nghe',
  'Tìm kiếm thông tin trên internet',
  'Nhận biết những nét riêng của bản thân',
  'Sở thích của bản thân',
  'Chăm sóc và phát triển bản thân',
  'Quan tâm, chăm sóc người thân',
  'Trang trí nhà cửa',
  'Dọn dẹp nhà cửa',
  'Trang trí lớp học',
  'Ứng phó khi gặp mưa to, gió lớn',
  'Những hoạt động phòng chống ô nhiễm môi trường',
  'Mơ ước của em',
  'Sử dụng thời gian hiệu quả',
  'Phòng, ứng phó bị quấy rối tình dục'
      ]
    },
    grade4: {
      label: 'Chương trình Lớp 4',
      title: 'Rèn giao tiếp, tư duy chủ động và khả năng làm chủ cảm xúc',
      desc: 'Trẻ học thuyết trình, lắng nghe, ứng xử văn minh và sử dụng công nghệ đúng cách.',
      focus: 'Giao tiếp · Chủ động · Cảm xúc · Công nghệ',
      topics: [
        'Tôi là ai?',
  'Kỹ năng thuyết trình hiệu quả',
  'Công cụ sáng tạo học tập',
  'Sống chủ động',
  'Kỹ năng lắng nghe hiệu quả',
  'Ưu tiên việc quan trọng',
  'Tìm kiếm thông tin, tài liệu học tập trên internet',
  'Thực hiện và điều chỉnh thời gian biểu',
  'Tìm hiểu ứng dụng công nghệ',
  'Chia sẻ nỗi buồn với người thân',
  'Giao tiếp văn minh trên mạng xã hội',
  'Tự hào về bản thân',
  'Điều chỉnh cảm xúc',
  'Cách tha thứ',
  'Phòng ngừa, ứng phó khi bị đuối nước',
  'Giúp đỡ người gặp khó khăn',
  'Em yêu lao động',
  'Phòng ứng phó khi bị cô lập/kỳ thị',
  'Tôn trọng tài sản của người khác',
  'Em bảo vệ của công',
  'Nuôi dưỡng quan hệ bạn bè',
  'Ứng phó khi có dịch bệnh lây lan',
  'Sơ đồ tư duy',
  'Tìm hiểu về quyền và bổn phận của trẻ em',
  'Biết ơn người lao động',
  'Nhận biết nguy cơ bị xâm hại',
  'Hậu quả khi bị xâm hại',
  'Phòng tránh bị xâm hại',
  'Biết ơn thầy cô',
  'Quý trọng bạn bè',
  'Văn hóa nơi công cộng',
  'Đền ơn đáp nghĩa',
  'Quản lý tiền bạc',
  'Thực hiện nề nếp sinh hoạt',
  'Hình thành thói quen tư duy khoa học',
  'Thực hiện nhiệm vụ theo sự phân công'
      ]
    },
    grade5: {
      label: 'Chương trình Lớp 5',
      title: 'Chuẩn bị bản lĩnh, tư duy độc lập và sẵn sàng chuyển cấp',
      desc: 'Hỗ trợ trẻ làm chủ cảm xúc, tự học tốt hơn, phản biện tốt hơn và an toàn trên môi trường số.',
      focus: 'Bản lĩnh · Tự học · Phản biện · Chuyển cấp',
      topics: [
        { title: 'Tôn trọng sự khác biệt', category: 'social' },
  { title: 'Nhận thức bản thân', category: 'self' },
  { title: 'Kỹ năng làm chủ cảm xúc', category: 'emotion' },
  { title: 'Bảo vệ lẽ phải', category: 'social' },
  { title: 'Tự học hiệu quả', category: 'thinking' },
  { title: 'Tư duy tích cực', category: 'thinking' },
  { title: 'Chọn lọc và xử lý thông tin/tài liệu học tập', category: 'thinking' },
  { title: 'Phòng tránh bị lệ thuộc mạng xã hội', category: 'safety' },
  { title: 'Kỹ năng phòng tránh xâm hại tình dục', category: 'safety' },
  { title: 'Ứng xử khi bất đồng ý kiến', category: 'social' },
  { title: 'Sự thay đổi của bản thân', category: 'self' },
  { title: 'An toàn khi giao tiếp trên mạng', category: 'safety' },
  { title: 'Em làm gì khi gặp hỏa hoạn', category: 'safety' },
  { title: 'Hành động vì cộng đồng', category: 'social' },
  { title: 'Quản lý chi tiêu', category: 'self' },
  { title: 'Khám phá môi trường học tập mới', category: 'self' },
  { title: 'Chuẩn bị tâm thế cho môi trường học tập mới', category: 'self' },
  { title: 'Yêu thương gia đình', category: 'social' },
  { title: 'Tôn trọng phụ nữ', category: 'social' },
  { title: 'Em biết từ chối', category: 'emotion' },
  { title: 'Môi trường sống quanh em', category: 'thinking' },
  { title: 'Bảo vệ môi trường sống', category: 'social' },
  { title: 'Lập kế hoạch cá nhân', category: 'self' },
  { title: 'Phòng tránh bị xâm hại', category: 'safety' },
  { title: 'Sử dụng tiền hợp lý', category: 'self' },
  { title: 'Ứng phó với căng thẳng', category: 'emotion' },
  { title: 'Bảo vệ sức khỏe vào mùa đông', category: 'safety' },
  { title: 'Kế hoạch chi tiêu', category: 'self' },
  { title: 'Chăm sóc người thân', category: 'social' },
  { title: 'Học nhóm hiệu quả', category: 'thinking' },
  { title: 'Phòng tránh bệnh truyền nhiễm', category: 'safety' },
  { title: 'Nhận biết tình huống không an toàn trên mạng xã hội', category: 'safety' },
  { title: 'Phòng ứng phó ngộ độc thực phẩm', category: 'safety' },
  { title: 'Bài học từ sự không thành công', category: 'thinking' },
  { title: 'Kỹ năng phản biện', category: 'thinking' },
  { title: 'Em làm tuyên truyền viên môi trường', category: 'social' }
      ]
    }
  };

  readonly features: FeatureItem[] = [
    {
      icon: '✨',
      title: 'Tự tin & tự lập',
      desc: 'Trẻ biết chủ động hơn trong sinh hoạt, học tập và những việc phù hợp với lứa tuổi.'
    },
    {
      icon: '💬',
      title: 'Giao tiếp tích cực',
      desc: 'Biết lắng nghe, chia sẻ, tôn trọng người khác và giao tiếp lễ phép trong nhiều tình huống.'
    },
    {
      icon: '🧠',
      title: 'Làm chủ cảm xúc',
      desc: 'Nhận diện cảm xúc, điều chỉnh phản ứng và bình tĩnh hơn trước áp lực hay mâu thuẫn.'
    },
    {
      icon: '🛡️',
      title: 'An toàn & trách nhiệm',
      desc: 'Biết bảo vệ bản thân, phân biệt đúng sai và từng bước xây dựng lối sống có trách nhiệm.'
    }
  ];

  readonly methods: MethodItem[] = [
    {
      title: 'Tình huống thực tế',
      desc: 'Gắn nội dung học với gia đình, trường lớp, bạn bè và các tình huống đời sống.'
    },
    {
      title: 'Thực hành liên tục',
      desc: 'Trẻ được luyện tập thường xuyên để dần chuyển hóa kỹ năng thành hành vi tốt.'
    },
    {
      title: 'Biểu đạt và phản hồi',
      desc: 'Khuyến khích trẻ nói lên suy nghĩ, cảm xúc và quan điểm cá nhân một cách tích cực.'
    },
    {
      title: 'Đồng hành cùng phụ huynh',
      desc: 'Tăng hiệu quả khi gia đình cùng duy trì và khích lệ trẻ mỗi ngày.'
    }
  ];

  readonly testimonials: TestimonialItem[] = [
    {
      initials: 'MA',
      name: 'Phụ huynh bé Minh Anh',
      grade: 'Lớp 2',
      quote:
        'Sau một thời gian học, con biết tự chuẩn bị đồ đi học, nói chuyện lễ phép hơn và biết chia sẻ với người thân nhiều hơn trước. Điều mình thích nhất là con chủ động hơn.',
      featured: true
    },
    {
      initials: 'GH',
      name: 'Phụ huynh bé Gia Huy',
      grade: 'Lớp 4',
      quote:
        'Con tự tin hơn khi trình bày suy nghĩ, biết bình tĩnh hơn khi có mâu thuẫn và không còn phản ứng nóng như trước. Gia đình thấy sự thay đổi rất rõ.'
    },
    {
      initials: 'KL',
      name: 'Phụ huynh bé Khánh Linh',
      grade: 'Lớp 5',
      quote:
        'Khóa học giúp con biết quản lý thời gian, chủ động học tập hơn và có nhận thức tốt hơn khi sử dụng internet.'
    }
  ];

  readonly pricingPlans: PricingPlan[] = [
    {
      name: 'Gói Cơ Bản',
      price: '499.000đ',
      features: [
        'Học theo khối lớp',
        'Tài liệu cơ bản',
        'Nội dung nền tảng',
        'Phù hợp để bắt đầu'
      ],
      cta: 'Đăng ký ngay'
    },
    {
      name: 'Gói Nâng Cao',
      price: '899.000đ',
      features: [
        'Toàn bộ nội dung theo khối lớp',
        'Bài tập ứng dụng thực tế',
        'Định hướng phụ huynh đồng hành',
        'Phù hợp phát triển toàn diện'
      ],
      cta: 'Chọn gói này',
      featured: true
    },
    {
      name: 'Gói Toàn Diện',
      price: '1.490.000đ',
      features: [
        'Trọn bộ chương trình',
        'Tài liệu mở rộng',
        'Định hướng kỹ năng lâu dài',
        'Ưu tiên tư vấn riêng'
      ],
      cta: 'Nhận tư vấn'
    }
  ];

  readonly faqs: FaqItem[] = [
    {
      question: 'Chương trình phù hợp với độ tuổi nào?',
      answer:
        'Chương trình dành cho học sinh tiểu học từ Lớp 1 đến Lớp 5, với nội dung được thiết kế riêng theo từng độ tuổi.'
    },
    {
      question: 'Nội dung học có gần với thực tế không?',
      answer:
        'Có. Nội dung xoay quanh các tình huống gần gũi như giao tiếp, cảm xúc, an toàn cá nhân, học tập, gia đình và môi trường số.'
    },
    {
      question: 'Con nhút nhát có học được không?',
      answer:
        'Có. Đây là nhóm trẻ thường tiến bộ rất rõ khi được rèn đúng cách, đặc biệt ở các kỹ năng giao tiếp và biểu đạt cảm xúc.'
    },
    {
      question: 'Phụ huynh có thể đồng hành cùng con không?',
      answer:
        'Có. Sự đồng hành của phụ huynh là yếu tố quan trọng để giúp trẻ duy trì thói quen tốt và tăng hiệu quả sau mỗi bài học.'
    }
  ];

  get currentProgram(): Program {
    return this.programs[this.activeGrade];
  }

  selectGrade(grade: GradeKey): void {
    this.activeGrade = grade;
  }

  toggleFaq(index: number): void {
    this.openFaqIndex = this.openFaqIndex === index ? -1 : index;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const y = window.scrollY;
    this.showScrollTop = y > 260;
    this.isScrolled = y > 24;
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  trackByIndex(index: number): number {
    return index;
  }

  trackByGrade(_: number, item: NavGradeItem): GradeKey {
    return item.key;
  }

  trackByPlan(_: number, item: PricingPlan): string {
    return item.name;
  }

  trackByFaq(_: number, item: FaqItem): string {
    return item.question;
  }
}
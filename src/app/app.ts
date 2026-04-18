import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

type GradeKey = 'grade1' | 'grade2' | 'grade3' | 'grade4' | 'grade5';

interface ProgramItem {
  key: GradeKey;
  name: string;
  title: string;
  description: string;
  topics: string[];
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
  showScrollTop = false;
  isScrolled = false;
  expandedPrograms: Partial<Record<GradeKey, boolean>> = {};

  programs: ProgramItem[] = [
    {
      key: 'grade1',
      name: 'Lớp 1',
      title: 'Xây nền nếp, lễ phép, an toàn và tự lập',
      description:
        'Dành cho trẻ mới vào tiểu học, tập trung vào hành vi nền tảng và kỹ năng sống cơ bản.',
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
    {
      key: 'grade2',
      name: 'Lớp 2',
      title: 'Phát triển tự nhận thức, cảm xúc và trách nhiệm cá nhân',
      description:
        'Giúp trẻ hiểu bản thân, tăng kỷ luật cá nhân, hợp tác tốt hơn và ứng xử an toàn hơn.',
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
    {
      key: 'grade3',
      name: 'Lớp 3',
      title: 'Nuôi dưỡng tự tin, lòng biết ơn và năng lực ứng xử tích cực',
      description:
        'Giúp trẻ hiểu bản thân, biết đặt mục tiêu, giữ lời hứa và giao tiếp tích cực hơn.',
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
    {
      key: 'grade4',
      name: 'Lớp 4',
      title: 'Rèn giao tiếp, tư duy chủ động và khả năng làm chủ cảm xúc',
      description:
        'Trẻ học thuyết trình, lắng nghe, ứng xử văn minh và sử dụng công nghệ đúng cách.',
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
    {
      key: 'grade5',
      name: 'Lớp 5',
      title: 'Chuẩn bị bản lĩnh, tư duy độc lập và sẵn sàng chuyển cấp',
      description:
        'Hỗ trợ trẻ làm chủ cảm xúc, tự học tốt hơn, phản biện tốt hơn và an toàn trên môi trường số.',
      topics: [
        'Tôn trọng sự khác biệt',
        'Nhận thức bản thân',
        'Kỹ năng làm chủ cảm xúc',
        'Bảo vệ lẽ phải',
        'Tự học hiệu quả',
        'Tư duy tích cực',
        'Chọn lọc và xử lý thông tin/tài liệu học tập',
        'Phòng tránh bị lệ thuộc mạng xã hội',
        'Kỹ năng phòng tránh xâm hại tình dục',
        'Ứng xử khi bất đồng ý kiến',
        'Sự thay đổi của bản thân',
        'An toàn khi giao tiếp trên mạng',
        'Em làm gì khi gặp hỏa hoạn',
        'Hành động vì cộng đồng',
        'Quản lý chi tiêu',
        'Khám phá môi trường học tập mới',
        'Chuẩn bị tâm thế cho môi trường học tập mới',
        'Yêu thương gia đình',
        'Tôn trọng phụ nữ',
        'Em biết từ chối',
        'Môi trường sống quanh em',
        'Bảo vệ môi trường sống',
        'Lập kế hoạch cá nhân',
        'Phòng tránh bị xâm hại',
        'Sử dụng tiền hợp lý',
        'Ứng phó với căng thẳng',
        'Bảo vệ sức khỏe vào mùa đông',
        'Kế hoạch chi tiêu',
        'Chăm sóc người thân',
        'Học nhóm hiệu quả',
        'Phòng tránh bệnh truyền nhiễm',
        'Nhận biết tình huống không an toàn trên mạng xã hội',
        'Phòng ứng phó ngộ độc thực phẩm',
        'Bài học từ sự không thành công',
        'Kỹ năng phản biện',
        'Em làm tuyên truyền viên môi trường'
      ]
    }
  ];

  get currentProgram(): ProgramItem {
    return this.programs.find((item) => item.key === this.activeGrade) ?? this.programs[0];
  }

  selectGrade(key: GradeKey): void {
    this.activeGrade = key;
  }

  isExpanded(key: GradeKey): boolean {
    return !!this.expandedPrograms[key];
  }

  toggleProgram(key: GradeKey): void {
    this.expandedPrograms[key] = !this.expandedPrograms[key];
  }

  getVisibleTopics(program: ProgramItem): string[] {
    return this.isExpanded(program.key) ? program.topics : program.topics.slice(0, 5);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.showScrollTop = window.scrollY > 300;
    this.isScrolled = window.scrollY > 20;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
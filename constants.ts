
import { Question, QuestionType } from './types';

// Helper to clean URLs from common OCR errors
const cleanUrl = (url: string) => {
  if (!url) return undefined;
  return url.trim()
    .replace(/\s+/g, '') // Remove spaces
    .replace(/res\.ioe\.vnzedu/, 'res.ioe.vn/edu') // Fix domain typos
    .replace(/res\.ioe\.vii/, 'res.ioe.vn')
    .replace(/res\.ioe\.vm/, 'res.ioe.vn')
    .replace(/Audio\s*mp3/i, 'Audio.mp3') // Fix extension
    .replace(/ImageExam\s*(\d)/, 'ImageExam/$1') // Fix path separators
    .replace(/Olympic\s*ExamData/, 'OlympicExamData')
    .replace(/EOlympic\s*ExamData/, 'EOlympic/ExamData')
    .replace(/'/g, '') // Remove accidental quotes
    .replace(/Audio-mp3/i, 'Audio.mp3');
};

export const QUIZ_DATA: Question[] = [
  { 
    id: 1, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "I saw her walk in the park w_ _ _ her dog.", 
    correctAnswer: "with", 
    explanation: "Dùng giới từ 'with' (với) để chỉ sự đồng hành. 'Walk with her dog' nghĩa là đi dạo cùng với chú chó của cô ấy." 
  },
  { 
    id: 2, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "If I hadn't stayed up late last night, I ... tired now.", 
    options: ["wouldn't have been", "wouldn't be", "shouldn't have been", "couldn't have been"], 
    correctAnswer: "wouldn't be", 
    explanation: "Đây là câu điều kiện hỗn hợp (Mixed Conditional). Mệnh đề If dùng quá khứ hoàn thành (hadn't stayed) diễn tả giả định trái ngược quá khứ. Mệnh đề chính dùng 'would + V' (wouldn't be) diễn tả kết quả ở hiện tại (now)." 
  },
  { 
    id: 3, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Many people think there ... a lot of precious stones on Mars.", 
    options: ["will be", "would be", "maybe", "might be"], 
    correctAnswer: "might be", 
    explanation: "'Might be' diễn tả khả năng có thể xảy ra nhưng không chắc chắn. Câu này nói về suy đoán sự tồn tại của đá quý trên sao Hỏa." 
  },
  { 
    id: 4, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["with your father.", "That woman", "is a singer", "over there", "who is talking"], 
    correctAnswer: "That woman over there is a singer who is talking with your father.", 
    explanation: "Cấu trúc: Subject (That woman over there) + Verb (is) + Complement (a singer) + Relative Clause (who is talking with your father)." 
  },
  { 
    id: 5, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["been given out", "collected them.", "Numerous", "but no one", "surveys have"], 
    correctAnswer: "Numerous surveys have been given out but no one collected them.", 
    explanation: "Cấu trúc câu bị động thì hiện tại hoàn thành (have been given out) kết hợp với mệnh đề tương phản (but...)." 
  },
  { 
    id: 6, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "... were invented in China about 5,000 years ago.", 
    imageUrl: cleanUrl("https://res.ioe.vn/edu/OlympicExam/Data/ImageExam/2019/4/2/636898214801794102_566X320.jpg"), 
    correctAnswer: "Chopsticks", 
    explanation: "Hình ảnh hiển thị đôi đũa. 'Chopsticks' (đũa) được phát minh ở Trung Quốc khoảng 5000 năm trước." 
  },
  { 
    id: 7, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "He doesn't help me, possibly because I never ask him _ _ _ help.", 
    correctAnswer: "for", 
    explanation: "Cấu trúc 'ask someone for help': nhờ ai đó giúp đỡ." 
  },
  { 
    id: 8, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "It's no use asking children to _ _ _ _ quiet. They are always noisy.", 
    correctAnswer: "keep", 
    explanation: "Cụm từ 'keep quiet': giữ im lặng/trật tự." 
  },
  { 
    id: 9, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["is the traditional", "to celebrate", "holiday of Vietnam", "the Lunar New Year.", "Tet holiday"], 
    correctAnswer: "Tet holiday is the traditional holiday of Vietnam to celebrate the Lunar New Year.", 
    explanation: "Định nghĩa về ngày Tết: Là ngày lễ truyền thống của Việt Nam để mừng năm mới âm lịch." 
  },
  { 
    id: 10, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "A shaman was a man or woman _ _ _ sang songs, danced and did magic spells to make people well.", 
    correctAnswer: "who", 
    explanation: "Đại từ quan hệ 'who' dùng để thay thế cho danh từ chỉ người (man or woman) làm chủ ngữ trong mệnh đề quan hệ." 
  },
  { 
    id: 11, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "He fools around in class and doesn't pay ...", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2015/1/9/635563956407142350_Audio.mp3"), 
    correctAnswer: "attention", 
    explanation: "Cụm từ 'pay attention': chú ý. Nghe audio để xác nhận ngữ cảnh." 
  },
  { 
    id: 12, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "... people speak English as their first language.", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2016/4/8/635956755304986801_Audio.mp3"), 
    correctAnswer: "400 million", 
    explanation: "Thông tin trong bài nghe đề cập đến con số '400 million' (400 triệu) người nói tiếng Anh như tiếng mẹ đẻ." 
  },
  { 
    id: 13, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "... at the party, we saw Ruth standing alone.", 
    options: ["Arriving", "We arrived", "Arrived", "We were arriving"], 
    correctAnswer: "Arriving", 
    explanation: "Rút gọn mệnh đề trạng ngữ chỉ thời gian khi cùng chủ ngữ (we). 'When we arrived...' -> 'Arriving at the party...'." 
  },
  { 
    id: 14, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "She repeated the instructions slowly in _ _ _ _ _ that he should understand.", 
    correctAnswer: "order", 
    explanation: "Cấu trúc 'in order that + mệnh đề': để mà (chỉ mục đích)." 
  },
  { 
    id: 15, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "... saw Tom go out, did they?", 
    options: ["Somebody", "Nobody", "Anybody", "Everybody"], 
    correctAnswer: "Nobody", 
    explanation: "Câu hỏi đuôi là khẳng định (did they?) nên mệnh đề chính phải mang nghĩa phủ định. 'Nobody' phù hợp nhất." 
  },
  { 
    id: 16, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "I hope that he _ _ _ _ get well soon.", 
    correctAnswer: "will", 
    explanation: "Động từ 'hope' thường đi với thì tương lai đơn (will) để diễn tả hy vọng về một sự việc sẽ xảy ra." 
  },
  { 
    id: 17, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["Although he did not", "the vase.", "that he broke", "we know", "admit it,"], 
    correctAnswer: "Although he did not admit it, we know that he broke the vase.", 
    explanation: "Mệnh đề nhượng bộ với 'Although' (Mặc dù anh ấy không thừa nhận) + Mệnh đề chính (chúng tôi biết anh ấy đã làm vỡ bình)." 
  },
  { 
    id: 18, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "There IS a comedy program on _ _ _ _ _ _ _ 10:15 and 11:00.", 
    correctAnswer: "between", 
    explanation: "Cấu trúc 'between ... and ...': ở giữa khoảng thời gian A và B." 
  },
  { 
    id: 19, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Something is _ _ _ _ _ with this calculator.", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2016/4/8/635956753369717387_Audio.mp3"), 
    correctAnswer: "wrong", 
    explanation: "Cụm từ 'something is wrong with...': có gì đó không ổn/bị hỏng với cái gì đó." 
  },
  { 
    id: 20, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The actress, _ _ _ _ _ with her manager and some friends, is going to a party tonight.", 
    correctAnswer: "along", 
    explanation: "Cụm từ 'along with': cùng với. Chủ ngữ chính là 'The actress' (số ít) nên động từ chia 'is'." 
  },
  { 
    id: 21, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["the sofa even though I thought I d lost", "turn up behind", "It for", "good.", "My purse has just"], 
    correctAnswer: "My purse has just turn up behind the sofa even though I thought I d lost It for good.", 
    explanation: "'Turn up' nghĩa là xuất hiện/được tìm thấy. 'Lost it for good' nghĩa là mất hẳn/mất vĩnh viễn." 
  },
  { 
    id: 22, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["behave like fools.", "April 1st is the day", "to make them.", "when people try to", "trick their friends."], 
    correctAnswer: "April 1st is the day when people try to trick their friends to make them behave like fools.", 
    explanation: "Định nghĩa ngày Cá tháng Tư." 
  },
  { 
    id: 23, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Do you like your new job? - Yes, but my employer insisted that I ... on time.", 
    options: ["was", "am", "have been", "be"], 
    correctAnswer: "be", 
    explanation: "Cấu trúc giả định cách (Subjunctive): insist that + S + (should) + V-bare. Do đó dùng 'be'." 
  },
  { 
    id: 24, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["The natural program", "around Ba Be Lake.", "shown on TV", "last night", "was about wildlife"], 
    correctAnswer: "The natural program shown on TV last night was about wildlife around Ba Be Lake.", 
    explanation: "'Shown on TV last night' là mệnh đề quan hệ rút gọn (bị động) bổ nghĩa cho 'The natural program'." 
  },
  { 
    id: 25, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The Statue of Liberty, standing on an island in the harbor, _ _ _ _ _ _everyone who comes to New York by sea.", 
    correctAnswer: "greets", 
    explanation: "Tượng Nữ thần Tự do 'chào đón' (greets) mọi người đến New York bằng đường biển." 
  },
  { 
    id: 26, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "We haven’t got any match, _ _ I can t light a fire.", 
    correctAnswer: "so", 
    explanation: "Liên từ 'so' (vì vậy) dùng để chỉ kết quả: Không có diêm -> không thể nhóm lửa." 
  },
  { 
    id: 27, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["with the hospitality", "tourists,", "of Vietnamese people.", "When visiting Vietnam,", "are very impressed"], 
    correctAnswer: "When visiting Vietnam, tourists are very impressed with the hospitality of Vietnamese people.", 
    explanation: "Cấu trúc 'impressed with': ấn tượng với sự hiếu khách (hospitality)." 
  },
  { 
    id: 28, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "If they go to the mountains next week, they ... ski.", 
    options: ["will be able to", "can", "would be able to", "must be able to"], 
    correctAnswer: "will be able to", 
    explanation: "Câu điều kiện loại 1. Để chỉ khả năng trong tương lai (next week), dùng 'will be able to' thay vì 'can'." 
  },
  { 
    id: 29, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Let her have some drink, will _ _ _?", 
    correctAnswer: "you", 
    explanation: "Câu hỏi đuôi cho câu mệnh lệnh bắt đầu bằng 'Let' (xin phép/đề nghị) thường dùng 'will you'." 
  },
  { 
    id: 30, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "They made their living by ... fish in the ocean everyday.", 
    options: ["to catch", "catch", "catching", "caught"], 
    correctAnswer: "catching", 
    explanation: "Sau giới từ 'by' (chỉ phương tiện/cách thức) động từ phải ở dạng V-ing (catching)." 
  },
  { 
    id: 31, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Everyone _ _ _ _ _ _ _ _ _ _ _ to the football team's success.", 
    correctAnswer: "contributed", 
    explanation: "Cấu trúc 'contribute to': đóng góp vào cái gì." 
  },
  { 
    id: 32, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Don't be afraid to admit ... your mistakes.", 
    options: ["to", "about", "in", "for"], 
    correctAnswer: "to", 
    explanation: "Cấu trúc 'admit to something/V-ing': thừa nhận điều gì." 
  },
  { 
    id: 33, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Tom has m_ _ _ books than his father.", 
    correctAnswer: "more", 
    explanation: "So sánh hơn của danh từ đếm được (books): many -> more." 
  },
  { 
    id: 34, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "We use a _ _ _ _ _ _ to break up the soil and plant the seeds.", 
    correctAnswer: "plough", 
    explanation: "'Plough' (cái cày) là nông cụ dùng để xới đất." 
  },
  { 
    id: 35, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["of danger.", "is commonly", "The colour", "considered a sign", "red"], 
    correctAnswer: "The colour red is commonly considered a sign of danger.", 
    explanation: "Cấu trúc bị động: be considered + Noun (được xem là biểu tượng của nguy hiểm)." 
  },
  { 
    id: 36, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["the talent and dedication", "We admire", "losing something.", "of the young athletes, but we also", "wonder if they're"], 
    correctAnswer: "We admire the talent and dedication of the young athletes, but we also wonder if they're losing something.", 
    explanation: "Câu ghép với liên từ 'but'. Ngưỡng mộ tài năng nhưng băn khoăn liệu họ có đang đánh mất gì không." 
  },
  { 
    id: 37, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Why is Jane upset? - She’s disappointed because her son's low test scores prevented ... to the university.", 
    options: ["him from admitting", "to admit him", "him to admit", "him from being admitted"], 
    correctAnswer: "him from being admitted", 
    explanation: "Cấu trúc: prevent someone from + V-ing (ngăn ai làm gì). Ở đây cần nghĩa bị động (được nhận vào đại học) nên dùng 'being admitted'." 
  },
  { 
    id: 38, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["a terrible", "was", "disaster.", "of the volcano", "The eruption"], 
    correctAnswer: "The eruption of the volcano was a terrible disaster.", 
    explanation: "Cấu trúc câu đơn S + V + O." 
  },
  { 
    id: 39, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Many people are interested ... the products that save energy.", 
    options: ["on", "to", "in", "for"], 
    correctAnswer: "in", 
    explanation: "Tính từ 'interested' đi với giới từ 'in': quan tâm đến cái gì." 
  },
  { 
    id: 40, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The potential of finding new sources of _ _ _ _ _ _ _ _ _ _ _ energy is great.", 
    correctAnswer: "alternative", 
    explanation: "Alternative energy: Năng lượng thay thế (như điện gió, mặt trời...)." 
  },
  { 
    id: 41, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Turn that music down? It's so loud. It'll_ _ _ _ _ _ you.", 
    correctAnswer: "deafen", 
    explanation: "Động từ 'deafen': làm cho điếc tai/inh tai." 
  },
  { 
    id: 42, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "What have humans been fascinated by?", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/OlympicExamData/ImageExam/2014/4/24/635339741082765823_Audio.mp3"), 
    options: ["Outer space", "Wider space", "Outdoor activities", "Magnificent places"], 
    correctAnswer: "Outer space", 
    explanation: "Nghe audio để tìm thông tin. 'Outer space' (không gian vũ trụ) là đáp án đúng." 
  },
  { 
    id: 43, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Instead of... a new car. she'll have her old one ....", 
    options: ["to buy/ repaired", "buying/ to repair", "buying, be repaired", "buying/repaired"], 
    correctAnswer: "buying/repaired", 
    explanation: "'Instead of' + V-ing (buying). Cấu trúc nhờ vả bị động: Have something done (have her old one repaired)." 
  },
  { 
    id: 44, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Acid rain, industrial pollution and garbage have made many sources of water un_ _ _ _ _ _ _le.", 
    correctAnswer: "drinkab", 
    explanation: "Từ cần điền là 'undrinkable' (không uống được). Ô nhiễm làm nguồn nước không thể uống." 
  },
  { 
    id: 45, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "_ _ _of the smallest countries in the world is San Marino.", 
    correctAnswer: "One", 
    explanation: "Cấu trúc so sánh nhất: One of the + adj-est + N(plural) (Một trong những...)." 
  },
  { 
    id: 46, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The subject of their photos is the_ _ _ _ _w of being disabled.", 
    correctAnswer: "sorro", 
    explanation: "Từ đầy đủ là 'sorrow' (nỗi buồn/bi ai). Chủ đề bức ảnh là nỗi buồn của việc bị khuyết tật." 
  },
  { 
    id: 47, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["She often", "was composed, by Chopin.", "plays the music", "that"], 
    correctAnswer: "She often plays the music that was composed by Chopin.", 
    explanation: "Mệnh đề quan hệ 'that was composed by Chopin' bổ nghĩa cho 'the music'." 
  },
  { 
    id: 48, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["The writer's neighbors", "sometimes", "to come to tea.", "ask him and his wife"], 
    correctAnswer: "The writer's neighbors sometimes ask him and his wife to come to tea.", 
    explanation: "Trạng từ chỉ tần suất 'sometimes' đứng trước động từ thường. Cấu trúc 'ask someone to do something'." 
  },
  { 
    id: 49, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "_ _ _ _ _ _ _of the cold weather, we couldn't visit our grandmother.", 
    correctAnswer: "Because", 
    explanation: "Cấu trúc 'Because of + Noun Phrase' (Vì thời tiết lạnh...)." 
  },
  { 
    id: 50, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Yoko told me about students ... have taken the entrance exam 13 times.", 
    options: ["what", "whom", "which", "that"], 
    correctAnswer: "that", 
    explanation: "Đại từ quan hệ thay thế cho danh từ chỉ người 'students' làm chủ ngữ. Có thể dùng 'who' hoặc 'that'. Trong đáp án chỉ có 'that'." 
  },
  { 
    id: 51, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Chọn từ có phần gạch chân phát âm khác:", 
    options: ["frown", "blown", "grown", "owner"], 
    correctAnswer: "frown", 
    explanation: "'frown' phát âm là /aʊ/ (như 'cow'), trong khi các từ còn lại (blown, grown, owner) phát âm là /əʊ/ (như 'go')." 
  },
  { 
    id: 52, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Christine doesn't ride a motorbike to work, and ...", 
    options: ["Maggie either", "Maggie doesn't too", "either doesn't Maggie", "neither does Maggie"], 
    correctAnswer: "neither does Maggie", 
    explanation: "Đồng tình phủ định dùng 'neither + trợ động từ + chủ ngữ' (cũng không)." 
  },
  { 
    id: 53, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The power of _ _ _ _has been used for centuries to directly drive various machines...", 
    correctAnswer: "wind", 
    explanation: "Năng lượng gió (power of wind) đã được dùng từ nhiều thế kỷ để chạy máy móc (cối xay gió)." 
  },
  { 
    id: 54, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["whose raincoat", "the man after the meeting.", "I have to call.", "I accidentally picked up"], 
    correctAnswer: "I have to call the man whose raincoat I accidentally picked up after the meeting.", 
    explanation: "Đại từ quan hệ sở hữu 'whose raincoat' (chiếc áo mưa của người đàn ông mà tôi đã cầm nhầm)." 
  },
  { 
    id: 55, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The Tale of _ _ _ _ _ _ _ _ _ _", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/Thi_cac_cap/2019-2020/Quoc%20Gia/L9/nghe/1/19.mp3"), 
    correctAnswer: "Despereaux", 
    explanation: "Tên riêng trong bài nghe: 'The Tale of Despereaux' (Chuyện của Despereaux)." 
  },
  { 
    id: 56, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The United Kingdom ... is made up of England, Scotland, _ _ _ _ _ and Northern Ireland.", 
    correctAnswer: "Wales", 
    explanation: "Vương quốc Anh bao gồm: Anh, Scotland, Wales và Bắc Ireland." 
  },
  { 
    id: 57, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "I will never forget... him on a rainy day.", 
    options: ["to meet", "meet", "meeting", "met"], 
    correctAnswer: "meeting", 
    explanation: "Forget + V-ing: Quên việc đã xảy ra. 'Tôi sẽ không bao giờ quên lần gặp anh ấy...'." 
  },
  { 
    id: 63, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "You can read a _ _ _ _ _ _ _ of a book, or just a few pages...", 
    correctAnswer: "chapter", 
    explanation: "Một chương (chapter) của cuốn sách." 
  },
  { 
    id: 64, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Chọn từ có trọng âm khác:", 
    options: ["linguistics", "decorate", "battery"], 
    correctAnswer: "linguistics", 
    explanation: "'linguistics' nhấn âm 2, các từ còn lại 'decorate', 'battery' nhấn âm 1." 
  },
  { 
    id: 65, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "What do they believe?", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/OlympicExamData/ImageExam/2015/4/9/635641976426649384_Audio.mp3"), 
    options: ["Critical to everyone", "Familiar to everyone", "Commercial one", "Beneficial to everyone"], 
    correctAnswer: "Beneficial to everyone", 
    explanation: "Nghe audio để chọn đáp án đúng (Có lợi cho mọi người)." 
  },
  { 
    id: 66, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "I ... the hot weather in the south.", 
    options: ["use to", "used to", "am use to", "am used to"], 
    correctAnswer: "am used to", 
    explanation: "Cấu trúc 'be used to + Noun/V-ing': quen với cái gì đó. 'Tôi đã quen với thời tiết nóng'." 
  },
  { 
    id: 67, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["went to Hai Phong,", "Last month", "my uncle", "where he is working."], 
    correctAnswer: "Last month my uncle went to Hai Phong, where he is working.", 
    explanation: "Mệnh đề quan hệ chỉ nơi chốn 'where he is working' bổ nghĩa cho 'Hai Phong'." 
  },
  { 
    id: 68, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["we understand", "we learn,", "the world.", "The more", "the better"], 
    correctAnswer: "The more we learn, the better we understand the world.", 
    explanation: "So sánh kép: The more... the better... (Càng học nhiều, chúng ta càng hiểu thế giới tốt hơn)." 
  },
  { 
    id: 69, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Tom and Mary never came to class late. ...", 
    options: ["So did we", "Neither did we", "We did either", "Neither we did"], 
    correctAnswer: "Neither did we", 
    explanation: "Đồng tình phủ định với động từ thường ở quá khứ: 'Neither did + S' (Chúng tôi cũng không)." 
  },
  { 
    id: 70, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Chọn từ có trọng âm khác:", 
    options: ["obsession", "grocery", "pagoda", "encourage"], 
    correctAnswer: "grocery", 
    explanation: "'grocery' nhấn âm 1, các từ còn lại nhấn âm 2." 
  },
  { 
    id: 71, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The little boy is helping the blind cross the str_ _t.", 
    correctAnswer: "ee", 
    explanation: "Street: đường phố." 
  },
  { 
    id: 72, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The authorities were either unaware of the problem or turned a _ _ _ _ _ eye to it.", 
    correctAnswer: "blind", 
    explanation: "Thành ngữ 'turn a blind eye': làm ngơ, giả vờ không thấy." 
  },
  { 
    id: 73, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "She began to p_ _ _ tennis three years ago.", 
    correctAnswer: "lay", 
    explanation: "Play tennis: chơi quần vợt." 
  },
  { 
    id: 74, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "We use money not only to meet the basic _ _ _ _ _ of life...", 
    correctAnswer: "needs", 
    explanation: "Basic needs: nhu cầu cơ bản." 
  },
  { 
    id: 75, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "For your own _ _ _ _ _ _, never ride in a car with a drunk driver.", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2016/4/8/635956755830445112_Audio.mp3"), 
    correctAnswer: "safety", 
    explanation: "Safety: sự an toàn. Vì sự an toàn của chính bạn." 
  },
  { 
    id: 76, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "She explained to him how to solve the _ _ _ _ _ _ _.", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2016/4/8/635956756276161820_Audio.mp3"), 
    correctAnswer: "problem", 
    explanation: "Solve the problem: giải quyết vấn đề." 
  },
  { 
    id: 77, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "In 1971, two men said that they were ... by aliens.", 
    options: ["caught", "captured", "kept", "killed"], 
    correctAnswer: "captured", 
    explanation: "Captured by aliens: bị người ngoài hành tinh bắt giữ." 
  },
  { 
    id: 78, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "John is working in a factory. His job is ... broken machines.", 
    options: ["repair", "to repair", "repairing", "repaired"], 
    correctAnswer: "to repair", 
    explanation: "Cấu trúc bổ ngữ cho chủ ngữ: His job is to do something (Công việc của anh ấy là sửa chữa...)." 
  },
  { 
    id: 79, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "During the war, he was imprisoned as an enemy ...", 
    options: ["alien", "alienist", "alienate", "alienator"], 
    correctAnswer: "alien", 
    explanation: "Enemy alien: người nước ngoài thuộc quốc gia thù địch (trong chiến tranh)." 
  },
  { 
    id: 80, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "_ _ _ _ _ you are laying the table, I will go and check the faucet.", 
    correctAnswer: "While", 
    explanation: "While: Trong khi (diễn tả hai hành động xảy ra song song)." 
  },
  { 
    id: 81, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Chọn từ có phần gạch chân phát âm khác:", 
    options: ["amount", "mountain", "loudspeaker", "boutique"], 
    correctAnswer: "boutique", 
    explanation: "'boutique' phát âm là /u:/, các từ còn lại phát âm là /aʊ/." 
  },
  { 
    id: 82, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["my appointment.", "I wrote the date", "be sure to remember", "on the board, in order to"], 
    correctAnswer: "I wrote the date on the board, in order to be sure to remember my appointment.", 
    explanation: "In order to + V: để làm gì (mục đích). Viết lên bảng để chắc chắn nhớ cuộc hẹn." 
  },
  { 
    id: 83, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "It would be _ _ _ _ _ _ _ _ _ _ for me to finish the work by this weekend.", 
    correctAnswer: "impossible", 
    explanation: "Impossible: không thể. Dựa vào ngữ cảnh (thường là việc khó khăn)." 
  },
  { 
    id: 84, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "You should _ _ _ _ an eye on the road as you are driving.", 
    correctAnswer: "keep", 
    explanation: "Keep an eye on: để mắt đến, chú ý." 
  },
  { 
    id: 85, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["to use their cars less.", "Petrol is relatively cheap", "cities public transport", "in the US and outside the major", "is bad, so they see no reason"], 
    correctAnswer: "Petrol is relatively cheap in the US and public transport outside the major cities is bad, so they see no reason to use their cars less.", 
    explanation: "Câu ghép giải thích lý do người Mỹ ít dùng phương tiện công cộng: Xăng rẻ và giao thông công cộng ngoại ô tệ." 
  },
  { 
    id: 86, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["It was not", "stopped.", "until after midnight", "next door", "that the noise"], 
    correctAnswer: "It was not until after midnight that the noise next door stopped.", 
    explanation: "Cấu trúc 'It was not until... that...': Mãi cho đến khi... thì..." 
  },
  { 
    id: 87, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Scientists ... that the building of the bridge be stopped.", 
    options: ["banned", "complained", "said", "recommended"], 
    correctAnswer: "recommended", 
    explanation: "Dùng 'recommended' vì mệnh đề sau đó dùng bàng thái cách (be stopped). Recommend that + S + (should) + V." 
  },
  { 
    id: 88, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Chọn từ có phần gạch chân phát âm khác:", 
    options: ["student", "lunar", "humor", "pupil"], 
    correctAnswer: "lunar", 
    explanation: "'lunar' phát âm /u:/, các từ còn lại phát âm /ju:/ (student, humor, pupil)." 
  },
  { 
    id: 89, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["opportunity of visiting the wildlife", "reserve in Ohio.", "He's a nature", "at the", "enthusiast and he will certainly jump"], 
    correctAnswer: "He's a nature enthusiast and he will certainly jump at the opportunity of visiting the wildlife reserve in Ohio.", 
    explanation: "Jump at the opportunity: chớp lấy cơ hội." 
  },
  { 
    id: 90, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["It's becoming", "a job", "more and more", "in this town.", "difficult to find"], 
    correctAnswer: "It's becoming more and more difficult to find a job in this town.", 
    explanation: "Cấu trúc so sánh càng ngày càng (more and more difficult)." 
  },
  { 
    id: 91, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "She is fond of her nephew in _ _ _ _ _ of his terrible behavior.", 
    correctAnswer: "spite", 
    explanation: "In spite of: Mặc dù. Yêu quý cháu mặc dù hành vi tệ hại." 
  },
  { 
    id: 92, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "No one is to leave this building _ _ _ _ _ _ _ police permission.", 
    correctAnswer: "without", 
    explanation: "Without: mà không có. Không ai được rời đi mà không có sự cho phép của cảnh sát." 
  },
  { 
    id: 93, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Events that are happening all _ _ _ _ the world...", 
    correctAnswer: "over", 
    explanation: "All over the world: trên toàn thế giới." 
  },
  { 
    id: 94, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "She said that she had worked t_ _ _ _ for one year.", 
    correctAnswer: "here", 
    explanation: "Worked here/there. Ngữ cảnh câu gián tiếp thường đổi here -> there, nhưng đề bài cho 't...' nên có thể là 'there'." 
  },
  { 
    id: 95, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Apart from the one small river, the desert is entirely ...", 
    options: ["arid", "humid", "remote", "temperate"], 
    correctAnswer: "arid", 
    explanation: "Arid: khô cằn (đặc điểm của sa mạc)." 
  },
  { 
    id: 96, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "He was well _ _ _ _ _ of the problem.", 
    correctAnswer: "aware", 
    explanation: "Well aware of: nhận thức rất rõ về vấn đề." 
  },
  { 
    id: 97, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "A gesture is an action that sends a message... without using _ _ _ _ _ _.", 
    correctAnswer: "speech", 
    explanation: "Speech: lời nói. Cử chỉ là hành động truyền tải thông điệp không dùng lời nói." 
  },
  { 
    id: 98, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["Every year,", "Vietnam suffers", "from floods and", "the Middle of", "storms most."], 
    correctAnswer: "Every year, the Middle of Vietnam suffers from floods and storms most.", 
    explanation: "Miền Trung Việt Nam (The Middle of Vietnam) chịu ảnh hưởng lũ lụt và bão nhiều nhất." 
  },
  { 
    id: 99, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Not mentioning the author's name was a serious ...", 
    options: ["omission", "perception", "preservation", "rotation"], 
    correctAnswer: "omission", 
    explanation: "Omission: sự bỏ sót/thiếu sót." 
  },
  { 
    id: 100, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Toshiko had her car repaired by _ mechanic.", 
    correctAnswer: "a", 
    explanation: "Mạo từ 'a' trước danh từ đếm được số ít chỉ nghề nghiệp (a mechanic)." 
  },
  { 
    id: 101, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "... popular expressions in our language have interesting background.", 
    options: ["Little", "Many", "A large number", "Much"], 
    correctAnswer: "Many", 
    explanation: "Popular expressions là danh từ đếm được số nhiều nên dùng 'Many'. 'A large number' thiếu 'of'." 
  },
  { 
    id: 102, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "You cannot see the doctor ... you have made an appointment.", 
    options: ["because", "even", "unless", "however"], 
    correctAnswer: "unless", 
    explanation: "Unless = If not (Trừ khi). Bạn không thể gặp bác sĩ trừ khi đã hẹn trước." 
  },
  { 
    id: 103, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Crisis that calls _ _ _ solidarity.", 
    correctAnswer: "for", 
    explanation: "Call for: kêu gọi/đòi hỏi (sự đoàn kết)." 
  },
  { 
    id: 104, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "The chemistry book ... was a little expensive.", 
    options: ["that I bought it", "I bought that", "what I bought", "I bought"], 
    correctAnswer: "I bought", 
    explanation: "Mệnh đề quan hệ rút gọn: 'The chemistry book (that) I bought...'. Không dùng 'that I bought it' vì dư 'it'." 
  },
  { 
    id: 105, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Language, the _ _ _ we express ourselves...", 
    correctAnswer: "way", 
    explanation: "The way: cách thức." 
  },
  { 
    id: 106, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["of rice in 2020", "362,000 hectares", "drought and salinity", "would affect", "The government estimated"], 
    correctAnswer: "The government estimated drought and salinity would affect 362,000 hectares of rice in 2020.", 
    explanation: "Chính phủ ước tính hạn mặn sẽ ảnh hưởng 362.000 hecta lúa." 
  },
  { 
    id: 107, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "How did Peter feel?", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2014/4/24/635339740321640487_Audio.mp3"), 
    options: ["Excited", "Disappointed", "Indifferent", "Patient"], 
    correctAnswer: "Excited", 
    explanation: "Nghe audio để xác định cảm xúc của Peter (Hào hứng)." 
  },
  { 
    id: 108, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Children receive chocolate and eggs _ _ Easter.", 
    correctAnswer: "at", 
    explanation: "Dùng giới từ 'at' cho dịp lễ hội (at Easter)." 
  },
  { 
    id: 109, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["help their people", "survive.", "from tourism to", "need the money", "Some countries"], 
    correctAnswer: "Some countries need the money from tourism to help their people survive.", 
    explanation: "Một số quốc gia cần tiền từ du lịch để giúp người dân sinh tồn." 
  },
  { 
    id: 110, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "How _ _ _ _ days per week do you go to school?", 
    correctAnswer: "many", 
    explanation: "How many: hỏi số lượng (với danh từ đếm được 'days')." 
  },
  { 
    id: 111, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "How long does it take for Earth to rotate on its axis?", 
    options: ["365 days", "366 days", "24 hours", "4 years"], 
    correctAnswer: "24 hours", 
    explanation: "Trái đất tự quay quanh trục mất 24 giờ (1 ngày đêm)." 
  },
  { 
    id: 112, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "The unemployment ... in the USA fell to 13.3 percent.", 
    options: ["rate", "grade", "degree", "point"], 
    correctAnswer: "rate", 
    explanation: "Unemployment rate: Tỷ lệ thất nghiệp." 
  },
  { 
    id: 113, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["of stone", "lend themselves", "Many kinds", "building.", "to"], 
    correctAnswer: "Many kinds of stone lend themselves to building.", 
    explanation: "Lend themselves to: phù hợp cho việc gì." 
  },
  { 
    id: 114, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["is the storage of information", "in the brain.", "to memory, which", "closely related", "Learning is"], 
    correctAnswer: "Learning is closely related to memory, which is the storage of information in the brain.", 
    explanation: "Học tập liên quan mật thiết đến trí nhớ, cái mà là sự lưu trữ thông tin trong não." 
  },
  { 
    id: 115, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Chọn từ có phần gạch chân phát âm khác (-s):", 
    options: ["homes", "eggs", "parades", "cakes"], 
    correctAnswer: "cakes", 
    explanation: "'cakes' kết thúc bằng âm vô thanh /k/ nên -s phát âm là /s/. Các từ còn lại kết thúc bằng âm hữu thanh, -s phát âm là /z/." 
  },
  { 
    id: 116, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Monkey can't sing, ...?", 
    options: ["can they", "can't they"], 
    correctAnswer: "can they", 
    explanation: "Câu hỏi đuôi: Mệnh đề chính phủ định (can't) -> Câu hỏi đuôi khẳng định (can). Monkey số nhiều (loài khỉ nói chung) hoặc số ít đều có thể quy về 'they'." 
  },
  { 
    id: 117, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "She was well ... up in a thick fur coat.", 
    options: ["wrapped", "packed", "rolled", "wound"], 
    correctAnswer: "wrapped", 
    explanation: "Wrapped up: mặc ấm, quấn chặt (trong áo)." 
  },
  { 
    id: 118, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "She went to a seaside resort because she was _ _ _ _ on water-skiing.", 
    correctAnswer: "keen", 
    explanation: "Keen on: đam mê, thích thú." 
  },
  { 
    id: 119, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["for people.", "so keep quiet", "are sacred places", "when visiting.", "Pagodas"], 
    correctAnswer: "Pagodas are sacred places for people, so keep quiet when visiting.", 
    explanation: "Chùa là nơi linh thiêng, vì vậy hãy giữ trật tự khi tham quan." 
  },
  { 
    id: 120, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["their vision", "US.", "with", "of the future.", "share", "They are going to"], 
    correctAnswer: "They are going to share with US their vision of the future.", 
    explanation: "Share with someone something (Chia sẻ với chúng tôi tầm nhìn tương lai)." 
  },
  { 
    id: 121, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "We may win, we may lose - It's just the ... of the draw!", 
    options: ["strike", "odds", "chance", "luck"], 
    correctAnswer: "luck", 
    explanation: "Thành ngữ 'luck of the draw': vận may rủi (như bốc thăm)." 
  },
  { 
    id: 122, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Chọn từ có phần gạch chân phát âm khác:", 
    options: ["architecture", "immature", "manufacture", "structure"], 
    correctAnswer: "immature", 
    explanation: "'immature' kết thúc là /jʊə/ (hoặc /ʊər/), trong khi 'architecture', 'manufacture', 'structure' là /tʃə/." 
  },
  { 
    id: 123, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["some good advice", "for anyone", "Mr Ba has", "who wants to learn a second language."], 
    correctAnswer: "Mr Ba has some good advice for anyone who wants to learn a second language.", 
    explanation: "Ông Ba có lời khuyên cho bất cứ ai muốn học ngoại ngữ 2." 
  },
  { 
    id: 124, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Chọn từ có phần gạch chân phát âm khác (oo):", 
    options: ["flood", "typhoon", "moon", "balloon"], 
    correctAnswer: "flood", 
    explanation: "'flood' phát âm là /ʌ/ (như 'blood'), các từ còn lại là /u:/." 
  },
  { 
    id: 125, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "If you prefer to work _ _ _ _ _ _ _, download the test paper...", 
    correctAnswer: "offline", 
    explanation: "Offline: ngoại tuyến (làm việc không cần mạng)." 
  },
  { 
    id: 126, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["from", "Medicine is", "in the past.", "how it was", "very different"], 
    correctAnswer: "Medicine is very different from how it was in the past.", 
    explanation: "Y học rất khác so với quá khứ." 
  },
  { 
    id: 127, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Many strange animal behaviors on ... the scientists usually base...", 
    options: ["which", "that", "who", "whom"], 
    correctAnswer: "which", 
    explanation: "Giới từ 'on' + đại từ quan hệ 'which' (thay thế cho vật/sự việc 'behaviors'). 'That' không đứng sau giới từ." 
  },
  { 
    id: 128, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The past participle of \"slide\" is \"_ _ _ _\".", 
    correctAnswer: "slid", 
    explanation: "Quá khứ phân từ của 'slide' là 'slid' (trượt)." 
  },
  { 
    id: 129, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["in the", "1,000 visitors", "botanical grounds", "at one time.", "No more than", "will be allowed"], 
    correctAnswer: "No more than 1,000 visitors will be allowed in the botanical grounds at one time.", 
    explanation: "Không quá 1000 khách được phép vào vườn thực vật cùng lúc." 
  },
  { 
    id: 130, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["and minerals.", "should supply", "vitamins", "A healthy diet", "all necessary"], 
    correctAnswer: "A healthy diet should supply all necessary vitamins and minerals.", 
    explanation: "Chế độ ăn lành mạnh cần cung cấp đủ vitamin và khoáng chất." 
  },
  { 
    id: 131, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Mr. Brown is looking _ _ _ his glasses.", 
    correctAnswer: "for", 
    explanation: "Looking for: đang tìm kiếm." 
  },
  { 
    id: 132, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Which ingredient is NOT used to make a pizza?", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2019/4/4/636899762901886377_Audio.mp3"), 
    options: ["Cheese", "Bacon", "Orange", "Apple"], 
    correctAnswer: "Apple", 
    explanation: "Táo (Apple) thường không dùng làm pizza truyền thống (hoặc dựa theo bài nghe)." 
  },
  { 
    id: 133, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Don't let him get under your _ _ _ _.", 
    correctAnswer: "skin", 
    explanation: "Idiom 'get under your skin': làm bạn khó chịu/phát cáu." 
  },
  { 
    id: 134, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["delayed by", "of Flight 382 from", "The arrival", "Moscow", "has been", "one hour."], 
    correctAnswer: "The arrival of Flight 382 from Moscow has been delayed by one hour.", 
    explanation: "Chuyến bay từ Moscow bị trễ 1 giờ." 
  },
  { 
    id: 135, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["so as to", "save forests.", "gas for cooking.", "People are", "advised to use"], 
    correctAnswer: "People are advised to use gas for cooking so as to save forests.", 
    explanation: "So as to: để (mục đích). Khuyên dùng gas nấu ăn để bảo vệ rừng." 
  },
  { 
    id: 136, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["the dictionary", "some new words.", "from Nga in", "I borrowed", "order to look up"], 
    correctAnswer: "I borrowed the dictionary from Nga in order to look up some new words.", 
    explanation: "In order to: để. Mượn từ điển để tra từ mới." 
  },
  { 
    id: 137, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["It is important", "of smoking.", "of the negative impacts", "that every student", "be aware"], 
    correctAnswer: "It is important that every student be aware of the negative impacts of smoking.", 
    explanation: "Quan trọng là mọi học sinh cần nhận thức được tác hại của thuốc lá." 
  },
  { 
    id: 138, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Zoo are very s_ _ _ _ _ _ _ _ about their image nowadays.", 
    correctAnswer: "sensitive", 
    explanation: "Sensitive: nhạy cảm (về hình ảnh của họ)." 
  },
  { 
    id: 139, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Her ... was so great that she couldn't drive her car.", 
    options: ["anxiety", "anxious", "anxiously", "anxioiusly"], 
    correctAnswer: "anxiety", 
    explanation: "Cần danh từ sau tính từ sở hữu 'Her'. Anxiety: sự lo lắng." 
  },
  { 
    id: 140, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["be popular", "people.", "Coffee shops", "among retired", "will always"], 
    correctAnswer: "Coffee shops will always be popular among retired people.", 
    explanation: "Quán cà phê sẽ luôn phổ biến với người về hưu." 
  },
  { 
    id: 141, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "How often do the windows need cleaning?", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2015/1/9/635563954702527356_Audio.mp3"), 
    options: ["once a year", "twice a year", "once a month", "twice a month"], 
    correctAnswer: "twice a month", 
    explanation: "Nghe audio để chọn đáp án (2 lần một tháng)." 
  },
  { 
    id: 142, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Pilots... trying on oxygen _ _ _ _ _.", 
    correctAnswer: "masks", 
    explanation: "Oxygen masks: mặt nạ dưỡng khí." 
  },
  { 
    id: 143, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Mrs. Howard is the bread _ _ _ _ _ _ of the family.", 
    correctAnswer: "winner", 
    explanation: "Breadwinner: trụ cột gia đình (người kiếm tiền chính)." 
  },
  { 
    id: 144, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "We chat ab_ _ _ our work...", 
    correctAnswer: "about", 
    explanation: "Chat about: trò chuyện về." 
  },
  { 
    id: 145, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["is competent in", "does not know how", "to deal with this client.", "Although Richard", "his work, he"], 
    correctAnswer: "Although Richard is competent in his work, he does not know how to deal with this client.", 
    explanation: "Mặc dù Richard giỏi việc nhưng không biết cách đối phó với khách hàng này." 
  },
  { 
    id: 146, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The slave trade... contributed _ _ the spread of English.", 
    correctAnswer: "to", 
    explanation: "Contribute to: góp phần vào." 
  },
  { 
    id: 147, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "I think it's time for me to sharpen my _ _ _ _ _ _.", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2016/4/8/635956756809787751-Audio.mp3"), 
    correctAnswer: "skills", 
    explanation: "Sharpen my skills: mài giũa kỹ năng." 
  },
  { 
    id: 148, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "In 1954, the woman said she saw two aliens in the ...", 
    options: ["plane", "ship", "craft", "spacecraft"], 
    correctAnswer: "spacecraft", 
    explanation: "Spacecraft: tàu vũ trụ (của người ngoài hành tinh)." 
  },
  { 
    id: 149, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "How did they make their living?", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2014/4/25/635340139711702004-Audio.mp3"), 
    options: ["Catching fish", "Growing wheat", "Selling fruits", "Raising pigs"], 
    correctAnswer: "Catching fish", 
    explanation: "Nghe audio (đánh bắt cá)." 
  },
  { 
    id: 150, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Timor Leste is one of the countries of the Association of South East Asian _ _ _ _ _ _ _.", 
    correctAnswer: "Nations", 
    explanation: "ASEAN = Association of South East Asian Nations (Hiệp hội các quốc gia Đông Nam Á)." 
  },
  { 
    id: 151, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "In _ _ _ _ _ of his age, he works as hard as he used to.", 
    correctAnswer: "spite", 
    explanation: "In spite of his age: Bất chấp tuổi tác." 
  },
  { 
    id: 152, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["going to", "Peter", "to relax.", "the mountain", "suggested"], 
    correctAnswer: "Peter suggested going to the mountain to relax.", 
    explanation: "Suggest + V-ing: Gợi ý làm gì." 
  },
  { 
    id: 153, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "We need a useful device ... checking electrical circuits.", 
    options: ["for", "on", "in", "of"], 
    correctAnswer: "for", 
    explanation: "Useful for V-ing: Hữu ích để làm gì." 
  },
  { 
    id: 154, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "I didn't realize she was a foreigner. Her _ _ _ _ _ _ _ of English is very good.", 
    correctAnswer: "command", 
    explanation: "Command of English: Khả năng sử dụng ngôn ngữ." 
  },
  { 
    id: 155, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["are in spray", "common uses", "Their most", "cans and cooling", "systems."], 
    correctAnswer: "Their most common uses are in spray cans and cooling systems.", 
    explanation: "Công dụng phổ biến nhất là trong bình xịt và hệ thống làm mát." 
  },
  { 
    id: 156, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "The more a car costs, ... it goes.", 
    options: ["faster", "the more fastly", "the fastest", "the faster"], 
    correctAnswer: "the faster", 
    explanation: "So sánh kép: The more... the faster... (Xe càng đắt thì chạy càng nhanh)." 
  },
  { 
    id: 157, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Space travel is practical for it can help US ... the weather.", 
    options: ["foresee", "forecast", "forego", "forerun"], 
    correctAnswer: "forecast", 
    explanation: "Forecast the weather: Dự báo thời tiết." 
  },
  { 
    id: 158, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Listen and tick:", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2013/12/3/635216780477376901-Audio.mp3"), 
    options: ["Secondary school compulsory", "Optional high school", "Compulsory high school country", "Compulsory high school city"], 
    correctAnswer: "Secondary school compulsory", 
    explanation: "Dựa vào nội dung bài nghe (Tiếng Anh là môn bắt buộc ở cấp 2...)." 
  },
  { 
    id: 159, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["in the city centre.", "reduce the amount", "New laws", "of traffic", "should be introduced to"], 
    correctAnswer: "New laws should be introduced to reduce the amount of traffic in the city centre.", 
    explanation: "Luật mới nên được ban hành để giảm lưu lượng giao thông." 
  },
  { 
    id: 160, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["the countryside", "is quieter and", "Life in", "city life.", "more peaceful than"], 
    correctAnswer: "Life in the countryside is quieter and more peaceful than city life.", 
    explanation: "So sánh cuộc sống nông thôn và thành thị." 
  },
  { 
    id: 161, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["Heat from the body", "the wool or fur and", "stays in", "people warm.", "keeps"], 
    correctAnswer: "Heat from the body stays in the wool or fur and keeps people warm.", 
    explanation: "Nhiệt cơ thể giữ lại trong lớp len/lông và giữ ấm cho người." 
  },
  { 
    id: 162, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "When a sequence of still pictures were set in _ _ _ _ _ _, they could give the feeling of movement.", 
    correctAnswer: "motion", 
    explanation: "Set in motion: làm cho chuyển động." 
  },
  { 
    id: 163, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "I'm very much looking _ _ _ _ _ _ _ to the holiday.", 
    correctAnswer: "forward", 
    explanation: "Look forward to: mong chờ." 
  },
  { 
    id: 164, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "We have known each other since we _ _ _ _ children.", 
    correctAnswer: "were", 
    explanation: "Since we were children: Từ khi chúng tôi còn là những đứa trẻ (quá khứ)." 
  },
  { 
    id: 165, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "A holiday in America can be ... cheap.", 
    options: ["surprise", "surprised", "surprising", "surprisingly"], 
    correctAnswer: "surprisingly", 
    explanation: "Trạng từ 'surprisingly' bổ nghĩa cho tính từ 'cheap' (rẻ một cách đáng ngạc nhiên)." 
  },
  { 
    id: 166, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "How did you pay for this _ _ _ _?", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2016/4/8/635956753617000254_Audio.mp3"), 
    correctAnswer: "meal", 
    explanation: "Pay for this meal: Trả tiền cho bữa ăn này." 
  },
  { 
    id: 167, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The Minister was shouted _ _ _ _ by protestors...", 
    correctAnswer: "down", 
    explanation: "Shout down: la ó át tiếng ai đó." 
  },
  { 
    id: 168, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["where", "They have just", "from the village", "come back", "they were born."], 
    correctAnswer: "They have just come back from the village where they were born.", 
    explanation: "Họ vừa trở về từ ngôi làng nơi họ sinh ra." 
  },
  { 
    id: 169, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Households suffer from _ _ _ _ _ _ _ _ of water.", 
    correctAnswer: "shortage", 
    explanation: "Shortage of water: Sự thiếu hụt nước." 
  },
  { 
    id: 170, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["Nha Rong Harbor because", "John should go to", "left Vietnam in 1911.", "it is the place where", "President Ho Chi Minh"], 
    correctAnswer: "John should go to Nha Rong Harbor because it is the place where President Ho Chi Minh left Vietnam in 1911.", 
    explanation: "John nên đến Bến Nhà Rồng vì đó là nơi Bác Hồ ra đi tìm đường cứu nước năm 1911." 
  },
  { 
    id: 171, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["terrible headache the", "I didn't sleep", "very well that night", "and got a", "following morning."], 
    correctAnswer: "I didn't sleep very well that night and got a terrible headache the following morning.", 
    explanation: "Tôi ngủ không ngon và bị đau đầu khủng khiếp vào sáng hôm sau." 
  },
  { 
    id: 172, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "He was very upset by the ... of his English examination.", 
    options: ["failure", "effect", "success", "result"], 
    correctAnswer: "result", 
    explanation: "Result: kết quả. Anh ấy buồn vì kết quả bài thi." 
  },
  { 
    id: 173, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "I feel cold. Could you switch off the electric _ _ _?", 
    correctAnswer: "fan", 
    explanation: "Electric fan: quạt điện. Tắt quạt đi vì lạnh." 
  },
  { 
    id: 174, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "To _ _ _ their nests, tailorbirds use their bills as needles.", 
    correctAnswer: "sew", 
    explanation: "Sew: khâu/may. Chim thợ may dùng mỏ như kim để khâu tổ." 
  },
  { 
    id: 175, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "The house ... Shakespeare was born in is open...", 
    options: ["where", "which", "that", "whom"], 
    correctAnswer: "where", 
    explanation: "Dùng 'where' (nơi chốn) hoặc 'which' (nếu có giới từ 'in'). Tuy nhiên câu gốc có 'in' ở cuối ('born in') nên thực tế 'which' hoặc 'that' đúng ngữ pháp hơn, nhưng trong các bài trắc nghiệm IOE đôi khi 'where' được chấp nhận theo nghĩa 'nơi mà'. Nếu xét ngữ pháp chuẩn: 'The house which Shakespeare was born in'. Nếu đáp án bắt buộc chọn 1, 'where' thường bị lừa ở đây vì có 'in'. Nhưng 'where' = 'in which'. Vì vậy nếu dùng 'where' thì không còn 'in'. Ở đây có 'in', nên đáp án đúng ngữ pháp nhất là 'which' hoặc 'that'. Tuy nhiên nếu đề IOE thì 'where' hay được dùng lỏng lẻo." 
  },
  { 
    id: 176, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "Do you want this one _ _ that one?", 
    correctAnswer: "or", 
    explanation: "Or: hoặc. Bạn muốn cái này hay cái kia?" 
  },
  { 
    id: 177, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Chọn từ có trọng âm khác:", 
    options: ["considerate", "effectively", "efficiency", "deforestation"], 
    correctAnswer: "deforestation", 
    explanation: "'deforestation' nhấn âm 4, các từ còn lại nhấn âm 2." 
  },
  { 
    id: 178, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["during power cuts, there is a lot", "entertainment, such as books", "or board games, which don’t have to be plugged in to work.", "to be said for the oil lamp, the coal fire, and forms of", "As we discover"], 
    correctAnswer: "As we discover, during power cuts, there is a lot to be said for the oil lamp, the coal fire, and forms of entertainment, such as books or board games, which don’t have to be plugged in to work.", 
    explanation: "Câu phức dài: Khi mất điện, đèn dầu/bếp than và các trò chơi không cần điện (sách, board games) trở nên hữu ích." 
  },
  { 
    id: 179, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "She profited _ _ _ _ his vast experiences.", 
    correctAnswer: "from", 
    explanation: "Profit from: Hưởng lợi từ (kinh nghiệm của anh ấy)." 
  },
  { 
    id: 180, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "I cannot help ... anxious about the exam results.", 
    options: ["to feel", "feel", "feeling", "felt"], 
    correctAnswer: "feeling", 
    explanation: "Cannot help + V-ing: Không thể không (cảm thấy lo lắng)." 
  },
  { 
    id: 181, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "The building ... he lives ... is very old.", 
    options: ["which / in", "that / within", "where / in", "where / on"], 
    correctAnswer: "which / in", 
    explanation: "Mệnh đề quan hệ: The building which he lives in (Tòa nhà mà anh ấy sống ở trong đó)." 
  },
  { 
    id: 182, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "We have to suffer flood... _ _ _ _ _ _ _ of uncontrollable forest destruction.", 
    correctAnswer: "because", 
    explanation: "Because of: Bởi vì (phá rừng)." 
  },
  { 
    id: 183, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "War veterans were ... through the streets.", 
    options: ["parade", "parading", "paraded", "parades"], 
    correctAnswer: "paraded", 
    explanation: "Bị động quá khứ: Were paraded (Được diễu hành/đưa đi diễu hành)." 
  },
  { 
    id: 184, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["Only", "Water Park.", "do I take my kid to", "at weekend"], 
    correctAnswer: "Only at weekend do I take my kid to Water Park.", 
    explanation: "Đảo ngữ với 'Only at weekend' đứng đầu câu -> mượn trợ động từ 'do'." 
  },
  { 
    id: 185, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "During the war, we lost _ _ _ _ _ with many relatives.", 
    correctAnswer: "touch", 
    explanation: "Lose touch with: Mất liên lạc." 
  },
  { 
    id: 186, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "How _ _ _ _ runners joined the Boston Marathon?", 
    correctAnswer: "many", 
    explanation: "Runners đếm được -> How many." 
  },
  { 
    id: 187, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "They went to the lake for ...", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/OlympicExamData/ImageExam/2016/4/8/635957331241666364_Audio.mp3"), 
    options: ["sailing", "birdwatching", "fishing", "moving"], 
    correctAnswer: "birdwatching", 
    explanation: "Birdwatching: ngắm chim (dựa theo audio)." 
  },
  { 
    id: 188, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "What will tourists watch the birds doing?", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/OlympicExamData/ImageExam/2014/1/7/635246846608709404_Audio.mp3"), 
    options: ["Nesting and dancing", "Nesting and feeding", "Flying and feeding", "Flying and singing"], 
    correctAnswer: "Nesting and feeding", 
    explanation: "Nghe audio: Làm tổ và kiếm ăn." 
  },
  { 
    id: 189, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "How much is an adult's ticket?", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/OlympicExamData/ImageExam/2019/4/4/636899772338975464_Audio.mp3"), 
    options: ["£3", "£3.5", "£8", "£2"], 
    correctAnswer: "£8", 
    explanation: "Giá vé người lớn là 8 bảng." 
  },
  { 
    id: 190, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "The result is impossible to predict with any degree of...", 
    options: ["probability", "insurance", "assurance", "certainty"], 
    correctAnswer: "certainty", 
    explanation: "Degree of certainty: mức độ chắc chắn." 
  },
  { 
    id: 191, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "The hills...", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2017/4/14/636277586749348916_Audio.mp3"), 
    options: ["are all along the coast", "are 30 km long", "have a semi-circular shape", "are round"], 
    correctAnswer: "are all along the coast", 
    explanation: "Nghe audio: Những ngọn đồi nằm dọc bờ biển." 
  },
  { 
    id: 192, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The new power station produces vast amounts of _ _ _ _ _ _ _ _ _ _ _.", 
    correctAnswer: "electricity", 
    explanation: "Electricity: Điện năng." 
  },
  { 
    id: 193, 
    type: QuestionType.MULTIPLE_CHOICE, 
    questionText: "Clarke comes from a city ... located in the northern part of Germany.", 
    options: ["where", "which", "that is", "where is"], 
    correctAnswer: "that is", 
    explanation: "Rút gọn mệnh đề quan hệ (that is located) hoặc dùng đầy đủ. Ở đây 'that is' đúng ngữ pháp." 
  },
  { 
    id: 194, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "A _ _ _ _ _ _ _ _ _ school is usually for pupils over 11 years old.", 
    audioUrl: cleanUrl("https://res.ioe.vn/edu/EOlympic/ExamData/ImageExam/2015/1/9/635563956160349917_Audio.mp3"), 
    correctAnswer: "secondary", 
    explanation: "Secondary school: Trường cấp 2 (thường cho học sinh trên 11 tuổi)." 
  },
  { 
    id: 195, 
    type: QuestionType.REARRANGE, 
    questionText: "Sắp xếp câu:", 
    rearrangeParts: ["the world.", "I would travel", "around", "If I", "became rich,"], 
    correctAnswer: "If I became rich, I would travel around the world.", 
    explanation: "Câu điều kiện loại 2: Nếu tôi giàu (became), tôi sẽ đi vòng quanh thế giới." 
  },
  { 
    id: 196, 
    type: QuestionType.FILL_IN_BLANK, 
    questionText: "The teacher encouraged me _ _ join the football team.", 
    correctAnswer: "to", 
    explanation: "Encourage someone to do something: Khuyến khích ai làm gì." 
  }
];

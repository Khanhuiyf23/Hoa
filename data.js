const TOPIC_TYPES = ["Lý thuyết", "Bài tập", "Mẹo nhớ", "Trắc nghiệm"];

const topics = [
  {
    id: "este-lipit",
    title: "Este – Lipit",
    summary: "Nắm cấu tạo, danh pháp, phản ứng thủy phân và ứng dụng thực tế của este, chất béo.",
    importance: ["Quan trọng", "Hay ra đề"],
    keyPoints: [
      "Este tạo bởi axit + ancol, có nhóm chức -COO-.",
      "Phản ứng thủy phân trong môi trường kiềm là phản ứng một chiều (xà phòng hóa).",
      "Chất béo là trieste của glixerol với axit béo.",
      "Chất béo no thường rắn, không no thường lỏng.",
      "Chỉ số xà phòng hóa liên quan khối lượng mol trung bình chất béo."
    ],
    equations: [
      "CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O",
      "CH3COOC2H5 + NaOH → CH3COONa + C2H5OH",
      "(C17H35COO)3C3H5 + 3NaOH → 3C17H35COONa + C3H5(OH)3"
    ],
    memoryTips: [
      "Gặp NaOH + este: nghĩ ngay tách thành muối + ancol.",
      "Nhớ công thức chất béo: (RCOO)3C3H5."
    ],
    commonMistakes: [
      "Nhầm thủy phân este trong axit là phản ứng hoàn toàn.",
      "Quên bảo toàn nhóm COO khi tính số mol phản ứng."
    ],
    mindmap: "Este → cấu tạo/đồng phân → phản ứng thủy phân/đốt cháy; Lipit → chất béo → xà phòng hóa → ứng dụng.",
    quickSolve: "Bài toán đốt cháy este: ưu tiên bảo toàn C, H, O và dùng quan hệ nCO2, nH2O để suy công thức.",
    example: "Ví dụ: Xà phòng hóa 8,8g etyl axetat bằng NaOH vừa đủ. n este = 8,8/88 = 0,1 mol ⇒ nNaOH = 0,1 mol ⇒ mNaOH = 4,0g.",
    practiceQuestions: [
      {q: "Este nào có mùi chuối chín?", options: ["Isoamyl axetat", "Etyl axetat", "Metyl fomat", "Vinyl axetat"], answer: 0, explain: "Isoamyl axetat thường dùng làm hương chuối."},
      {q: "Sản phẩm xà phòng hóa chất béo là:", options: ["Axit béo + glixerol", "Muối axit béo + glixerol", "Ancol + axit", "Anđehit + muối"], answer: 1, explain: "Môi trường kiềm tạo muối natri/ kali của axit béo."},
      {q: "Este no đơn chức mạch hở có CTPT tổng quát:", options: ["CnH2nO2", "CnH2n+2O2", "CnH2n-2O2", "CnH2nO"], answer: 0, explain: "Giống axit cacboxylic no đơn chức."}
    ],
    focusTypes: ["Lý thuyết", "Bài tập", "Trắc nghiệm"]
  },
  {
    id: "carbohydrate",
    title: "Carbohydrate",
    summary: "Hệ thống glucozơ, saccarozơ, tinh bột, xenlulozơ và phản ứng đặc trưng thường thi.",
    importance: ["Quan trọng", "Dễ nhầm"],
    keyPoints: ["Glucozơ có phản ứng tráng bạc.","Saccarozơ không có phản ứng tráng bạc.","Tinh bột cho màu xanh tím với I2.","Xenlulozơ là polime thiên nhiên, không tan trong nước.","Thủy phân polisaccarit tạo monosaccarit."],
    equations: ["C6H12O6 + 2[Ag(NH3)2]OH → C6H12O7 + 2Ag + 4NH3 + H2O","(C6H10O5)n + nH2O → nC6H12O6","C12H22O11 + H2O → C6H12O6 + C6H12O6"],
    memoryTips: ["Nhớ 'saccarozơ = đường mía = không tráng bạc'.","Tinh bột + iot = xanh tím (mẹo nhận biết nhanh)."],
    commonMistakes: ["Nhầm xenlulozơ có phản ứng tráng bạc.","Quên phân biệt liên kết α và β trong tinh bột/xenlulozơ."],
    mindmap: "Monosaccarit (glucozơ) ↔ đisaccarit (saccarozơ) ↔ polisaccarit (tinh bột, xenlulozơ).",
    quickSolve: "Bài toán thủy phân carbohydrat: quy đổi về số mắt xích C6H10O5 để tính nhanh số mol glucozơ.",
    example: "Thủy phân hoàn toàn 0,1 mol saccarozơ thu 0,1 mol glucozơ và 0,1 mol fructozơ.",
    practiceQuestions: [
      {q: "Chất nào làm mất màu dung dịch brom ở điều kiện thường?", options: ["Saccarozơ", "Glucozơ", "Tinh bột", "Xenlulozơ"], answer: 1, explain: "Glucozơ có nhóm -CHO ở dạng mạch hở."},
      {q: "Tinh bột thuộc loại:", options: ["Monosaccarit", "Đisaccarit", "Polisaccarit", "Ancol đa chức"], answer: 2, explain: "Tinh bột gồm nhiều mắt xích glucozơ."},
      {q: "Saccarozơ thủy phân cho:", options: ["2 glucozơ", "Glucozơ + fructozơ", "Fructozơ + galactozơ", "Tinh bột"], answer: 1, explain: "Đây là phản ứng nghịch đảo đường."}
    ],
    focusTypes: ["Lý thuyết", "Mẹo nhớ", "Trắc nghiệm"]
  },
  {
    id: "amin-protein",
    title: "Amin – Amino axit – Protein",
    summary: "Phân biệt tính bazơ amin, lưỡng tính amino axit và phản ứng màu của protein.",
    importance: ["Hay ra đề", "Dễ nhầm"],
    keyPoints: ["Amin có tính bazơ do cặp e tự do trên N.","Amino axit vừa phản ứng với axit vừa phản ứng với bazơ.","Protein là polipeptit cao phân tử.","Phản ứng màu biure nhận biết protein.","Amino axit tồn tại ion lưỡng cực trong dung dịch."],
    equations: ["CH3NH2 + HCl → CH3NH3Cl","H2NCH2COOH + NaOH → H2NCH2COONa + H2O","H2NCH2COOH + HCl → [H3NCH2COOH]Cl"],
    memoryTips: ["Nhớ glyxin là amino axit đơn giản nhất.","Protein + Cu(OH)2 (kiềm) → màu tím biure."],
    commonMistakes: ["Nhầm mọi amin đều tan tốt trong nước.","Quên viết dạng ion lưỡng cực của amino axit."],
    mindmap: "Amin (bazơ) → amino axit (lưỡng tính) → peptit → protein (thủy phân).",
    quickSolve: "Bài amino axit tác dụng HCl/NaOH: đếm số nhóm -NH2 và -COOH để tính tỉ lệ mol.",
    example: "0,1 mol glyxin phản ứng vừa đủ 0,1 mol HCl vì có 1 nhóm -NH2.",
    practiceQuestions: [
      {q: "Chất có tính lưỡng tính là:", options: ["Metylamin", "Glyxin", "Anilin", "Etylamin"], answer: 1, explain: "Glyxin chứa cả -NH2 và -COOH."},
      {q: "Thuốc thử nhận biết protein là:", options: ["Dung dịch Br2", "Cu(OH)2/kiềm", "AgNO3/NH3", "HCl"], answer: 1, explain: "Phản ứng biure cho màu tím."},
      {q: "Amin bậc một no mạch hở có CTPT tổng quát:", options: ["CnH2n+3N", "CnH2n+1N", "CnH2n-1N", "CnH2n+2N"], answer: 0, explain: "Tương ứng dẫn xuất của NH3."}
    ],
    focusTypes: ["Lý thuyết", "Bài tập"]
  },
  {
    id: "polime",
    title: "Polime và vật liệu polime",
    summary: "Nắm monome, phản ứng trùng hợp/trùng ngưng và ứng dụng vật liệu polime phổ biến.",
    importance: ["Quan trọng"],
    keyPoints: ["Polime có phân tử khối lớn, cấu tạo từ nhiều mắt xích.","Trùng hợp: từ monome có liên kết bội.","Trùng ngưng: tạo polime + phân tử nhỏ (H2O, HCl).","PE, PVC, PS là polime tổng hợp thông dụng.","Tơ nilon-6,6 tạo bởi phản ứng trùng ngưng."],
    equations: ["nCH2=CH2 → (-CH2-CH2-)n","nCH2=CHCl → (-CH2-CHCl-)n","nH2N(CH2)6NH2 + nHOOC(CH2)4COOH → [ -NH(CH2)6NHCO(CH2)4CO- ]n + 2nH2O"],
    memoryTips: ["Thấy liên kết đôi C=C thường nghĩ đến trùng hợp.","Tơ nilon, polieste thường là sản phẩm trùng ngưng."],
    commonMistakes: ["Nhầm PE tạo bởi trùng ngưng.","Không phân biệt tơ thiên nhiên và tơ tổng hợp."],
    mindmap: "Monome → (trùng hợp/trùng ngưng) → polime → nhựa, tơ, cao su.",
    quickSolve: "Xác định loại phản ứng trước, sau đó viết mắt xích và lặp lại n lần.",
    example: "Vinyl clorua CH2=CHCl trùng hợp tạo PVC có mắt xích -CH2-CHCl-.",
    practiceQuestions: [
      {q: "PVC được điều chế từ monome:", options: ["CH2=CH2", "CH2=CHCl", "CH≡CH", "C6H5CH=CH2"], answer: 1, explain: "Vinyl clorua tạo PVC."},
      {q: "Phản ứng tạo nilon-6,6 thuộc loại:", options: ["Trùng hợp", "Trùng ngưng", "Thế", "Cộng"], answer: 1, explain: "Có tách H2O."},
      {q: "Tơ nào là tơ thiên nhiên?", options: ["Nilon-6", "Tơ tằm", "Visco", "Capron"], answer: 1, explain: "Tơ tằm có nguồn gốc protein tự nhiên."}
    ],
    focusTypes: ["Lý thuyết", "Mẹo nhớ"]
  },
  {
    id: "dai-cuong-kim-loai",
    title: "Đại cương kim loại",
    summary: "Nắm cấu tạo kim loại, dãy điện hóa, tính chất vật lý và hóa học cơ bản.",
    importance: ["Quan trọng", "Hay ra đề"],
    keyPoints: ["Kim loại có tính khử do dễ nhường e.","Dãy điện hóa giúp dự đoán chiều phản ứng.","Phản ứng kim loại với axit phụ thuộc bản chất axit.","Kim loại mạnh đẩy kim loại yếu ra khỏi dung dịch muối.","Hợp kim cải thiện tính chất cơ học."],
    equations: ["Zn + CuSO4 → ZnSO4 + Cu","2Al + 6HCl → 2AlCl3 + 3H2","Fe + 2FeCl3 → 3FeCl2"],
    memoryTips: ["Nhớ dãy hoạt động bằng cụm từ gợi nhớ trong SGK.","Kim loại trước H đẩy được H+ (với axit không oxi hóa)."],
    commonMistakes: ["Cho rằng Cu phản ứng với HCl loãng.","Nhầm thứ tự mạnh yếu giữa Fe2+/Fe và Cu2+/Cu."],
    mindmap: "Cấu tạo → tính chất vật lý → tính chất hóa học → dãy điện hóa → ứng dụng.",
    quickSolve: "Bài phản ứng thế kim loại: so sánh vị trí trong dãy hoạt động rồi mới viết phương trình.",
    example: "Cho Zn vào CuSO4 thấy đồng đỏ bám ngoài thanh kẽm do Zn mạnh hơn Cu.",
    practiceQuestions: [
      {q: "Kim loại nào không phản ứng với HCl loãng?", options: ["Fe", "Zn", "Cu", "Mg"], answer: 2, explain: "Cu đứng sau H trong dãy hoạt động."},
      {q: "Kim loại có tính khử mạnh nhất trong nhóm sau:", options: ["Ag", "Cu", "K", "Fe"], answer: 2, explain: "K rất dễ nhường e."},
      {q: "Trong pin điện hóa, cực dương là nơi xảy ra:", options: ["Oxi hóa", "Khử", "Thủy phân", "Trung hòa"], answer: 1, explain: "Catot là nơi nhận e (khử)."}
    ],
    focusTypes: ["Lý thuyết", "Bài tập", "Trắc nghiệm"]
  },
  {
    id: "kiem-kiemtho-nhom",
    title: "Kim loại kiềm – kiềm thổ – nhôm",
    summary: "Tập trung phản ứng đặc trưng của Na, K, Ca, Ba, Al và hợp chất thường gặp.",
    importance: ["Hay ra đề", "Dễ nhầm"],
    keyPoints: ["Kim loại kiềm phản ứng mạnh với nước.","Ca(OH)2 dùng nhận biết CO2.","Nhôm có tính lưỡng tính qua Al(OH)3.","NaHCO3, Na2CO3 là chất quen thuộc trong đề thi.","Nước cứng liên quan ion Ca2+, Mg2+."],
    equations: ["2Na + 2H2O → 2NaOH + H2","Al(OH)3 + NaOH → NaAlO2 + 2H2O","Ca(OH)2 + CO2 → CaCO3 + H2O"],
    memoryTips: ["Na, K gặp nước: nhớ ngay sinh H2 + bazơ.","Al(OH)3 tan trong cả axit và bazơ mạnh."],
    commonMistakes: ["Nhầm Al phản ứng được với HNO3 đặc nguội.","Viết sai sản phẩm của CO2 với nước vôi trong dư."],
    mindmap: "Kim loại kiềm/kiềm thổ → bazơ/hợp chất cacbonat; Nhôm → oxit, hiđroxit lưỡng tính.",
    quickSolve: "Bài CO2 + Ca(OH)2: xét tỉ lệ nCO2/nCa(OH)2 để quyết định tạo CaCO3 hay Ca(HCO3)2.",
    example: "Sục 0,1 mol CO2 vào 0,1 mol Ca(OH)2 thu tối đa 0,1 mol CaCO3 kết tủa.",
    practiceQuestions: [
      {q: "Hiđroxit lưỡng tính là:", options: ["NaOH", "Ca(OH)2", "Al(OH)3", "KOH"], answer: 2, explain: "Al(OH)3 phản ứng với cả axit và bazơ."},
      {q: "Nước cứng tạm thời chứa:", options: ["CaCl2, MgCl2", "Ca(HCO3)2, Mg(HCO3)2", "Na2SO4", "KNO3"], answer: 1, explain: "Muối hiđrocacbonat gây nước cứng tạm thời."},
      {q: "Kim loại phản ứng mạnh nhất với nước ở ĐK thường:", options: ["Mg", "Fe", "Na", "Al"], answer: 2, explain: "Na thuộc kim loại kiềm."}
    ],
    focusTypes: ["Bài tập", "Mẹo nhớ"]
  },
  {
    id: "sat-crom-dong",
    title: "Sắt – crom – đồng và một số kim loại quan trọng",
    summary: "Ôn trạng thái oxi hóa, hợp chất quan trọng và phản ứng nhận biết của Fe, Cr, Cu.",
    importance: ["Quan trọng", "Hay ra đề"],
    keyPoints: ["Fe có hai mức oxi hóa bền: +2, +3.","Cr có hợp chất Cr2O3, CrO3, muối cromat/đicromat.","Cu đứng sau H, không phản ứng HCl loãng.","Fe3+ có tính oxi hóa mạnh hơn Fe2+.","Hiện tượng màu kết tủa là phần dễ hỏi."],
    equations: ["FeCl2 + 2NaOH → Fe(OH)2 + 2NaCl","4Fe(OH)2 + O2 + 2H2O → 4Fe(OH)3","2FeCl3 + Cu → 2FeCl2 + CuCl2"],
    memoryTips: ["Fe2+ kết tủa trắng xanh, để lâu hóa nâu đỏ.","Đồng + HNO3 cho NO/NO2 tùy nồng độ."],
    commonMistakes: ["Nhầm Fe phản ứng với CuSO4 tạo Fe3+.","Viết sai màu dung dịch muối Cu2+."],
    mindmap: "Fe(II)/Fe(III) ↔ chuyển hóa; Cr(VI) ↔ Cr(III); Cu ↔ Cu2O/CuO.",
    quickSolve: "Bài oxi hóa - khử kim loại chuyển tiếp: tách nửa phản ứng e để cân bằng nhanh.",
    example: "Fe2+ bị oxi hóa bởi KMnO4 trong môi trường axit là phản ứng chuẩn độ quen thuộc.",
    practiceQuestions: [
      {q: "Kết tủa Fe(OH)2 có màu:", options: ["Nâu đỏ", "Trắng xanh", "Xanh lam", "Vàng"], answer: 1, explain: "Fe(OH)2 mới tạo có màu trắng xanh."},
      {q: "Dung dịch CuSO4 có màu:", options: ["Không màu", "Xanh lam", "Vàng lục", "Tím"], answer: 1, explain: "Ion Cu2+ tạo màu xanh lam đặc trưng."},
      {q: "Kim loại phản ứng với FeCl3 tạo FeCl2 là:", options: ["Ag", "Cu", "Au", "Pt"], answer: 1, explain: "Cu khử Fe3+ về Fe2+."}
    ],
    focusTypes: ["Lý thuyết", "Trắc nghiệm"]
  },
  {
    id: "dien-phan",
    title: "Điện phân",
    summary: "Hiểu bản chất điện cực, thứ tự phóng điện và công thức Faraday trong tính toán.",
    importance: ["Hay ra đề"],
    keyPoints: ["Catot xảy ra khử, anot xảy ra oxi hóa.","Điện phân nóng chảy khác điện phân dung dịch.","Cần xét ion nào ưu tiên phóng điện.","Khối lượng chất sinh ra tỉ lệ điện lượng.","Công thức: m = AIt/(nF)."],
    equations: ["2Cl- → Cl2 + 2e (anot)","Cu2+ + 2e → Cu (catot)","2H2O + 2e → H2 + 2OH-"],
    memoryTips: ["Catot = nhận electron (khử).","Nhớ F = 96500 C/mol e để bấm nhanh."],
    commonMistakes: ["Nhầm vị trí anot và catot.","Quên trừ lượng khí tan khi tính thể tích thực tế."],
    mindmap: "Điện phân → điện cực → thứ tự phóng điện → Faraday → bài toán khối lượng/khí.",
    quickSolve: "Đổi thời gian, cường độ sang số mol e trước rồi suy ra mọi đại lượng còn lại.",
    example: "Điện phân CuSO4 với I=1A trong 1930s: ne=0,02 mol ⇒ nCu=0,01 mol ⇒ mCu=0,64g.",
    practiceQuestions: [
      {q: "Tại catot của điện phân dung dịch CuSO4 (điện cực trơ), xảy ra:", options: ["Oxi hóa nước", "Khử Cu2+", "Khử SO42-", "Oxi hóa Cu"], answer: 1, explain: "Ion Cu2+ dễ nhận e hơn nước."},
      {q: "Định luật Faraday liên hệ giữa:", options: ["m và t", "m và I,t", "V và T", "n và p"], answer: 1, explain: "m tỉ lệ với điện lượng It."},
      {q: "Ở anot trơ điện phân NaCl đậm đặc tạo:", options: ["O2", "H2", "Cl2", "Na"], answer: 2, explain: "Cl- bị oxi hóa ưu tiên."}
    ],
    focusTypes: ["Bài tập", "Trắc nghiệm"]
  },
  {
    id: "pin-an-mon",
    title: "Pin điện và ăn mòn kim loại",
    summary: "Nắm cơ chế pin điện hóa, các dạng ăn mòn và cách bảo vệ kim loại trong thực tế.",
    importance: ["Quan trọng", "Mẹo nhanh"],
    keyPoints: ["Pin điện chuyển hóa năng lượng hóa học thành điện năng.","Anot của pin là cực âm, nơi oxi hóa.","Ăn mòn hóa học và ăn mòn điện hóa khác điều kiện xảy ra.","Bảo vệ bằng sơn phủ, mạ kim loại, dùng chất chống ăn mòn.","Bảo vệ catot dùng kim loại hoạt động mạnh hơn."],
    equations: ["Zn → Zn2+ + 2e","Cu2+ + 2e → Cu","2Fe + O2 + 2H2O → 2Fe(OH)2"],
    memoryTips: ["Trong pin Daniell: Zn tan, Cu bám.","Ăn mòn điện hóa cần 2 điện cực khác nhau + chất điện li."],
    commonMistakes: ["Nhầm anot pin luôn là cực dương.","Cho rằng sơn phủ là biện pháp điện hóa."],
    mindmap: "Pin điện hóa (anot/catot) ↔ ăn mòn (hóa học/điện hóa) ↔ biện pháp chống ăn mòn.",
    quickSolve: "Xác định cực dựa vào thế điện cực: kim loại hoạt động mạnh hơn làm anot.",
    example: "Mạ kẽm sắt giúp kẽm bị oxi hóa trước, bảo vệ lõi sắt khỏi gỉ.",
    practiceQuestions: [
      {q: "Trong pin Zn-Cu, anot là:", options: ["Cu", "Zn", "Cầu muối", "Dung dịch CuSO4"], answer: 1, explain: "Zn bị oxi hóa: Zn → Zn2+ + 2e."},
      {q: "Ăn mòn điện hóa cần điều kiện nào?", options: ["Chỉ có O2", "Hai kim loại và chất điện li", "Nhiệt độ cao", "Ánh sáng"], answer: 1, explain: "Phải hình thành cặp pin cục bộ."},
      {q: "Biện pháp bảo vệ vỏ tàu thép tốt là:", options: ["Sơn màu", "Gắn khối Zn", "Ngâm nước cất", "Đốt nóng"], answer: 1, explain: "Dùng kim loại hi sinh (Zn)."}
    ],
    focusTypes: ["Lý thuyết", "Mẹo nhớ"]
  },
  {
    id: "nhan-biet",
    title: "Nhận biết chất vô cơ – hữu cơ cơ bản",
    summary: "Tổng hợp thuốc thử đặc trưng và sơ đồ nhận biết nhanh các chất thường gặp.",
    importance: ["Dễ nhầm", "Mẹo nhanh"],
    keyPoints: ["Dùng quỳ tím để nhận biết môi trường axit/bazơ.","AgNO3/NH3 nhận nhóm -CHO.","Nước brom nhận biết liên kết đôi hoặc phenol.","BaCl2 nhận ion SO42-.","CO2 nhận bởi nước vôi trong."],
    equations: ["SO42- + Ba2+ → BaSO4↓","C6H5OH + 3Br2 → C6H2Br3OH↓ + 3HBr","CO2 + Ca(OH)2 → CaCO3↓ + H2O"],
    memoryTips: ["Ba2+ gặp sunfat → kết tủa trắng bền.","Phenol + brom nước → kết tủa trắng."],
    commonMistakes: ["Dùng AgNO3 để nhận biết mọi ancol.","Quên loại trừ ion gây nhiễu khi nhận biết."],
    mindmap: "Nhận biết theo: khí (CO2, SO2), ion (Cl-, SO42-), hợp chất hữu cơ (-CHO, C=C, phenol).",
    quickSolve: "Lập bảng hiện tượng trước khi làm để tránh chọn thuốc thử trùng chức năng.",
    example: "Phân biệt Na2CO3 và Na2SO4: thêm HCl, mẫu sủi bọt khí CO2 là Na2CO3.",
    practiceQuestions: [
      {q: "Thuốc thử nhận biết ion SO42- là:", options: ["NaOH", "BaCl2", "HCl", "AgNO3"], answer: 1, explain: "Tạo kết tủa BaSO4 trắng."},
      {q: "Phenol tác dụng brom nước cho hiện tượng:", options: ["Không đổi", "Mất màu + kết tủa trắng", "Kết tủa xanh", "Sủi khí"], answer: 1, explain: "Tạo 2,4,6-tribromophenol."},
      {q: "Chất làm quỳ tím hóa đỏ là:", options: ["NaCl", "HCl", "NaOH", "C2H5OH"], answer: 1, explain: "HCl là axit mạnh."}
    ],
    focusTypes: ["Mẹo nhớ", "Trắc nghiệm"]
  },
  {
    id: "tong-on-huu-co",
    title: "Tổng ôn phản ứng hữu cơ thường gặp",
    summary: "Hệ thống chuỗi chuyển hóa quan trọng: ankan, anken, ancol, andehit, axit, este.",
    importance: ["Hay ra đề"],
    keyPoints: ["Phản ứng thế, cộng, tách là 3 dạng cơ bản.","Ancol bậc một oxi hóa nhẹ cho anđehit.","Axit + ancol tạo este.","Anken cộng H2, Br2, H2O theo quy tắc.","Nhận biết nhóm chức giúp giải nhanh chuyển hóa."],
    equations: ["C2H4 + H2O → C2H5OH","C2H5OH + CuO → CH3CHO + Cu + H2O","CH3COOH + C2H5OH ⇌ CH3COOC2H5 + H2O"],
    memoryTips: ["Chuỗi nhớ nhanh: ankan → anken → ancol → andehit → axit.","Este hóa cần H2SO4 đặc, đun nóng."],
    commonMistakes: ["Nhầm ancol đa chức đều hòa tan Cu(OH)2.","Viết sai điều kiện phản ứng tách nước ancol."],
    mindmap: "Hiđrocacbon → dẫn xuất halogen → ancol → anđehit/axit → este.",
    quickSolve: "Bài chuyển hóa nhiều bước: xác định nhóm chức đầu-cuối rồi chọn phản ứng ngắn nhất.",
    example: "Từ etilen điều chế etyl axetat: C2H4 → C2H5OH → CH3COOC2H5.",
    practiceQuestions: [
      {q: "Anken phản ứng đặc trưng là:", options: ["Thế", "Cộng", "Trùng ngưng", "Oxi hóa không hoàn toàn"], answer: 1, explain: "Do có liên kết đôi C=C."},
      {q: "Oxi hóa etanol (xúc tác CuO, t°) thu:", options: ["CH3COOH", "CH3CHO", "CO2", "CH4"], answer: 1, explain: "Ancol bậc một cho andehit."},
      {q: "Điều kiện este hóa thường dùng:", options: ["NaOH", "H2SO4 đặc", "HCl loãng", "Nước brom"], answer: 1, explain: "H2SO4 đặc vừa xúc tác vừa hút nước."}
    ],
    focusTypes: ["Lý thuyết", "Bài tập"]
  },
  {
    id: "tong-on-vo-co",
    title: "Tổng ôn phản ứng vô cơ trọng tâm",
    summary: "Gom nhanh các phản ứng axit-bazơ, oxi hóa khử, nhiệt phân, trao đổi ion dễ xuất hiện trong đề.",
    importance: ["Quan trọng", "Hay ra đề"],
    keyPoints: ["Nắm điều kiện phản ứng trao đổi xảy ra (kết tủa/khí/chất điện li yếu).","Xác định số oxi hóa để cân bằng phản ứng oxi hóa-khử.","Kim loại + muối theo dãy hoạt động.","Nhiệt phân muối nitrat/cacbonat có quy luật riêng.","Phân biệt axit oxi hóa mạnh và không oxi hóa."],
    equations: ["Na2CO3 + 2HCl → 2NaCl + CO2 + H2O","2KClO3 → 2KCl + 3O2","Cu + 4HNO3(đặc) → Cu(NO3)2 + 2NO2 + 2H2O"],
    memoryTips: ["Muối cacbonat + axit mạnh luôn sinh CO2.","HNO3, H2SO4 đặc nóng thường là axit oxi hóa mạnh."],
    commonMistakes: ["Viết Fe + H2SO4 đặc nóng tạo H2.","Không cân bằng e trong phản ứng oxi hóa-khử."],
    mindmap: "Axit-bazơ ↔ trao đổi ion; oxi hóa-khử ↔ kim loại, phi kim; nhiệt phân ↔ muối.",
    quickSolve: "Đặt mục tiêu sản phẩm trước, sau đó dùng bảo toàn e để tìm hệ số nhanh.",
    example: "Fe + HNO3 loãng thường tạo NO, còn đặc tạo NO2 (tùy điều kiện).",
    practiceQuestions: [
      {q: "Phản ứng nào sinh khí CO2?", options: ["NaCl + HCl", "Na2CO3 + HCl", "NaOH + HCl", "BaCl2 + NaNO3"], answer: 1, explain: "Muối cacbonat gặp axit sinh CO2."},
      {q: "Axit không có tính oxi hóa mạnh là:", options: ["HNO3", "H2SO4 đặc", "HCl", "HClO4"], answer: 2, explain: "HCl loãng chủ yếu thể hiện tính axit."},
      {q: "Nhiệt phân KClO3 (xúc tác MnO2) tạo:", options: ["KCl + O2", "K + Cl2", "KOH", "K2O"], answer: 0, explain: "Phản ứng điều chế oxi trong PTN."}
    ],
    focusTypes: ["Bài tập", "Trắc nghiệm"]
  },
  {
    id: "bai-tap-tinh-toan",
    title: "Các dạng bài tập tính toán hay gặp trong Hóa 12",
    summary: "Tổng hợp mẹo giải nhanh các dạng đốt cháy, hỗn hợp, bảo toàn e, bảo toàn khối lượng.",
    importance: ["Quan trọng", "Mẹo nhanh", "Hay ra đề"],
    keyPoints: ["Bảo toàn khối lượng: m chất tham gia = m sản phẩm.","Bảo toàn nguyên tố C, H, O cực hiệu quả với hữu cơ.","Bảo toàn electron cho phản ứng oxi hóa-khử.","Quy đổi hỗn hợp giúp giảm ẩn số.","Đặt ẩn theo số mol thay vì khối lượng để dễ xử lý."],
    equations: ["n(e nhường) = n(e nhận)","m = n.M","n = V/22,4 (đktc)"],
    memoryTips: ["Không vội lập quá nhiều phương trình; ưu tiên định luật bảo toàn.","Kiểm tra đơn vị trước khi bấm máy."],
    commonMistakes: ["Nhầm điều kiện đktc khi đổi thể tích khí.","Bỏ sót chất dư trong bài hỗn hợp."],
    mindmap: "Bài toán tính toán → chọn phương pháp (bảo toàn/đại số/quy đổi) → kiểm tra điều kiện.",
    quickSolve: "Đọc đề 2 lượt: lượt 1 gạch dữ kiện, lượt 2 chọn phương pháp chủ đạo rồi mới đặt ẩn.",
    example: "Đốt cháy 0,1 mol hợp chất X thu 0,2 mol CO2 và 0,2 mol H2O ⇒ X có CTĐGN CH2O.",
    practiceQuestions: [
      {q: "Khi gặp bài oxi hóa-khử phức tạp nên ưu tiên:", options: ["Bảo toàn electron", "Định luật Charles", "Nhiệt hóa", "Phương pháp đồ thị"], answer: 0, explain: "Giảm số phương trình, tránh sai sót."},
      {q: "Ở đktc, số mol 11,2 lít khí là:", options: ["0,25", "0,5", "1", "2"], answer: 1, explain: "n = 11,2/22,4 = 0,5 mol."},
      {q: "Bước đầu tiên khi giải bài tính toán là:", options: ["Bấm máy ngay", "Đổi hết về gam", "Phân tích dữ kiện và chọn phương pháp", "Viết kết quả"], answer: 2, explain: "Chọn đúng phương pháp quyết định tốc độ."}
    ],
    focusTypes: ["Bài tập", "Mẹo nhớ", "Trắc nghiệm"]
  }
];

const quizBank = topics.flatMap((topic) => topic.practiceQuestions.map((q, idx) => ({
  id: `${topic.id}-${idx}`,
  topicId: topic.id,
  topicTitle: topic.title,
  ...q
}))).slice(0, 15);

const examTips = [
  {
    title: "Cách học thuộc phản ứng",
    icon: "🧠",
    points: [
      "Gom phản ứng theo nhóm chức/chuyên đề, không học rời rạc.",
      "Dùng sơ đồ mũi tên 2 chiều để nhớ chuỗi chuyển hóa.",
      "Ôn lặp lại theo chu kỳ 1-3-7 ngày."
    ]
  },
  {
    title: "Phân biệt chất hay nhầm",
    icon: "🔍",
    points: [
      "Lập bảng so sánh: dấu hiệu nhận biết + thuốc thử đặc trưng.",
      "Gạch chân điểm khác biệt duy nhất để tránh nhầm.",
      "Tự tạo flashcard cho 10 cặp chất dễ lẫn."
    ]
  },
  {
    title: "Mẹo làm trắc nghiệm nhanh",
    icon: "⚡",
    points: [
      "Ưu tiên loại đáp án sai rõ ràng trước.",
      "Ước lượng nhanh bằng bảo toàn để tránh tính dài.",
      "Nếu kẹt > 60 giây, đánh dấu và làm câu khác."
    ]
  },
  {
    title: "Cách tránh bẫy đề",
    icon: "🛡️",
    points: [
      "Đọc kỹ điều kiện: dư/vừa đủ, đặc/loãng, nóng/lạnh.",
      "Kiểm tra đơn vị và trạng thái chất trước khi kết luận.",
      "Soát lại các từ khóa 'không', 'luôn', 'chỉ'."
    ]
  },
  {
    title: "Kế hoạch ôn Hóa 12 trong 30 ngày",
    icon: "📅",
    points: [
      "Ngày 1-10: Ôn lý thuyết + phản ứng trọng tâm mỗi ngày 1 chuyên đề.",
      "Ngày 11-20: Luyện dạng bài tập tính toán + đề chuyên đề.",
      "Ngày 21-30: Làm đề tổng hợp, chữa lỗi sai và ôn lại flashcard."
    ]
  }
];

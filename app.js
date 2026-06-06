const questions = [
  {
    id: 1,
    category: "標識・標示",
    title: "一時停止の基本",
    text: "『止まれ』の標識がある交差点では、見通しが良く他の車が来ていなくても停止線の直前で必ず一時停止しなければならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "一時停止の標識がある場所では、安全確認の前に必ず停止が必要です。見通しが良いことは停止義務をなくす理由にはなりません。",
  },
  {
    id: 2,
    category: "安全確認",
    title: "発進前の確認",
    text: "駐停車中の車を発進させるときは、ルームミラーだけ見て後方の安全を確認すればよい。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "発進時はルームミラーだけでなく、ドアミラー、目視、合図の順で周囲を確認します。死角があるため目視確認が重要です。",
  },
  {
    id: 3,
    category: "徐行・速度",
    title: "徐行の意味",
    text: "徐行とは、すぐに停止できるような速度で進むことをいう。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "徐行はただゆっくり走ることではなく、危険に応じて直ちに停止できる速度で進むことを指します。",
  },
  {
    id: 4,
    category: "歩行者保護",
    title: "横断歩道の手前",
    text: "横断歩道の近くに歩行者がいても、まだ足を踏み出していなければ減速や停止の必要はない。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "横断しようとしている歩行者がいるときは、その通行を妨げないよう一時停止できる対応が必要です。",
  },
  {
    id: 5,
    category: "交差点",
    title: "左折時の確認",
    text: "左折するときは、巻き込み防止のため左後方の自転車や二輪車の有無を確認する必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "左折時は内輪差だけでなく巻き込み事故にも注意が必要です。左ミラーと目視で後方側方を確認します。",
  },
  {
    id: 6,
    category: "追い越し",
    title: "追い越し禁止場所",
    text: "踏切とその手前30メートル以内は、追い越しが禁止されている。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "踏切付近は危険が大きく、追い越し禁止場所に該当します。仮免では頻出です。",
  },
  {
    id: 7,
    category: "信号",
    title: "黄色信号の判断",
    text: "黄色信号は『急いで進め』ではなく、原則として停止位置で安全に止まるための信号である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "停止線で安全に停止できない場合を除き、黄色信号では止まる判断が基本です。",
  },
  {
    id: 8,
    category: "駐停車",
    title: "駐車禁止の考え方",
    text: "交差点の側端から5メートル以内は、駐車も停車もしてはならない場所である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "交差点付近は見通しと通行を妨げやすいため、駐停車禁止の代表的な場所です。",
  },
  {
    id: 9,
    category: "夜間運転",
    title: "ライトの使い方",
    text: "夜間、前方に車がいない道路ではハイビームの活用が基本だが、対向車や先行車がいる場合は切り替える必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "上向きライトが原則でも、他車の視界を妨げる場面では下向きに切り替えます。",
  },
  {
    id: 10,
    category: "悪条件",
    title: "雨天時の車間距離",
    text: "雨の日は制動距離が長くなるため、晴天時よりも車間距離を多めに取る必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "路面が滑りやすく停止距離も伸びるため、速度を抑えつつ車間距離を広めに取ります。",
  },
  {
    id: 11,
    category: "合図",
    title: "進路変更のタイミング",
    text: "進路変更の合図は、行動を始める直前に出せば十分である。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "進路変更の合図は約3秒前が原則です。周囲に意図を早めに伝える必要があります。",
  },
  {
    id: 12,
    category: "踏切",
    title: "踏切通過",
    text: "踏切では、前の車が詰まっていて踏切内で止まるおそれがあるなら進入してはならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "踏切内での立ち往生は重大事故につながります。出口側の余地を確認してから進入します。",
  },
  {
    id: 13,
    category: "標識・標示",
    title: "最高速度標識",
    text: "最高速度を示す標識がある道路では、周囲の流れが速くてもその速度を超えて走ってはならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "指定最高速度は法的な上限です。周囲の車の流れを理由に超過してよいことにはなりません。",
  },
  {
    id: 14,
    category: "安全確認",
    title: "ドアを開ける前",
    text: "駐車した車から降りるときは、後方から来る自転車や二輪車がいないかを確認してからドアを開ける必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "いわゆるドア開放事故を防ぐため、降車時も後方の安全確認が必要です。",
  },
  {
    id: 15,
    category: "徐行・速度",
    title: "見通しの悪い交差点",
    text: "信号機のない見通しの悪い交差点では、徐行して進まなければならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "見通しの悪い交差点は危険が大きいため、すぐ止まれる速度で進みます。",
  },
  {
    id: 16,
    category: "歩行者保護",
    title: "通学路の子ども",
    text: "道路脇で遊んでいる子どもを見かけたときは、急な飛び出しを予測して速度を落とすのが安全である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "子どもの行動は予測しにくいため、危険を先読みして減速するのが基本です。",
  },
  {
    id: 17,
    category: "交差点",
    title: "右折時の対向車",
    text: "右折するときは、対向直進車や左折車の進行を妨げないようにしなければならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "右折車は対向直進車等の動きを十分確認し、無理に曲がらないことが重要です。",
  },
  {
    id: 18,
    category: "追い越し",
    title: "前車の右折合図",
    text: "前の車が右折の合図をしているとき、その右側を通って追い越すことはできない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "右折しようとしている車の右側通過は危険で、通常は認められません。",
  },
  {
    id: 19,
    category: "信号",
    title: "赤信号と矢印",
    text: "信号が赤でも、青色の矢印信号が出ている方向には進むことができる。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "矢印信号は赤信号に対する例外で、示された方向へ進行できます。",
  },
  {
    id: 20,
    category: "駐停車",
    title: "バス停付近",
    text: "バス停の標示板から10メートル以内は、原則として駐停車が制限される場所である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "路線バスの運行や乗降を妨げないため、バス停付近は駐停車禁止となります。",
  },
  {
    id: 21,
    category: "夜間運転",
    title: "蒸発現象",
    text: "夜間や雨天時は、対向車のライトなどで歩行者が見えにくくなることがあるため注意が必要である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "蒸発現象などで歩行者が見えづらくなるため、速度を落として慎重に進みます。",
  },
  {
    id: 22,
    category: "悪条件",
    title: "ぬかるみ通過",
    text: "水たまりやぬかるみを通過するときは、歩行者に水をかけないよう十分速度を落とすべきである。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "安全面だけでなく、歩行者への迷惑防止も運転者の重要な配慮です。",
  },
  {
    id: 23,
    category: "合図",
    title: "左折の合図",
    text: "左折するときの合図は、交差点の直前で出せばよい。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "左折の合図は交差点の手前30メートル地点から行うのが原則です。",
  },
  {
    id: 24,
    category: "踏切",
    title: "踏切前の窓開け",
    text: "警報機がない踏切では、列車の音を聞き取りやすくするため窓を開けて確認するのが望ましい。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "視覚だけでなく聴覚も使って安全確認する意識が重要です。",
  },
  {
    id: 25,
    category: "優先関係",
    title: "幅の狭い坂道",
    text: "幅の狭い坂道で行き違う場合、原則として上りの車が優先される。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "坂道では原則として下りの車が停止して上りの車に道を譲ります。",
  },
  {
    id: 26,
    category: "優先関係",
    title: "優先道路",
    text: "交差点で自分の通る道路が優先道路なら、左右の安全確認をせずに進んでもよい。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "優先道路でも事故防止のため安全確認は必要です。優先だから無確認でよいわけではありません。",
  },
  {
    id: 27,
    category: "交差点",
    title: "交差点内での進路変更",
    text: "交差点の中では、原則として進路変更をしないほうが安全である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "交差点内での進路変更は他車の予測を乱しやすく危険です。",
  },
  {
    id: 28,
    category: "歩行者保護",
    title: "高齢者の横断",
    text: "高齢者が横断しようとしているときは、動きがゆっくりな場合があるので余裕を持って停止する必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "高齢者や体の不自由な人への配慮は学科でも重視されるポイントです。",
  },
  {
    id: 29,
    category: "徐行・速度",
    title: "安全地帯のそば",
    text: "安全地帯のそばを通るときは、その前後に歩行者がいるか注意しながら徐行する必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "安全地帯付近は歩行者の動きが増えるため、特に慎重な通行が求められます。",
  },
  {
    id: 30,
    category: "標識・標示",
    title: "黄色の実線",
    text: "道路中央の黄色の実線は、はみ出して追い越すことが禁止されていることを示す場合がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "中央線の色や線種には意味があり、黄色実線は追い越しのためのはみ出し禁止で頻出です。",
  },
  {
    id: 31,
    category: "安全確認",
    title: "バック時の確認",
    text: "後退するときは、ミラーだけでなく後方を目視して安全を確かめる必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "死角が多い後退では、目視確認を含めた慎重な安全確認が必要です。",
  },
  {
    id: 32,
    category: "駐停車",
    title: "坂道駐車",
    text: "上り坂で駐車するときは、車が動き出さないよう駐車ブレーキを確実にかける必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "坂道駐車は逸走防止が重要で、ギア位置や輪止めも含めて注意します。",
  },
  {
    id: 33,
    category: "悪条件",
    title: "霧の中の運転",
    text: "霧で見通しが悪いときは、速度を落とし、前車との間隔を普段より広く取る必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "視界不良時は危険発見が遅れるため、減速と車間距離確保が基本です。",
  },
  {
    id: 34,
    category: "夜間運転",
    title: "夜間の速度感覚",
    text: "夜間は周囲が暗く速度感覚が鈍りやすいため、昼間よりも注意して速度を管理する必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "夜間は実際より遅く感じて速度超過しやすいので、メーター確認が大切です。",
  },
  {
    id: 35,
    category: "合図",
    title: "停止の合図",
    text: "急ブレーキになるような停止は危険なので、できるだけ早めに停止の合図や減速をして後続車に知らせるほうがよい。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "後続車に意図を伝えることは追突防止につながります。",
  },
  {
    id: 36,
    category: "追い越し",
    title: "追い越されるとき",
    text: "後ろの車に追い越されるときは、急に速度を上げず、安全に追い越させるよう配慮する。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "追い越し時に速度を上げるのは危険です。安全に譲る姿勢が必要です。",
  },
  {
    id: 37,
    category: "信号",
    title: "点滅信号",
    text: "黄色の点滅信号では、他の交通に注意して進行することができる。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "黄色点滅は徐行ではなく注意進行です。赤点滅との違いも押さえるべきです。",
  },
  {
    id: 38,
    category: "標識・標示",
    title: "進入禁止",
    text: "進入禁止の標識がある道路には、短い距離でも入ってはならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "進入禁止は距離に関係なく進入できません。逆走防止にも関わる標識です。",
  },
  {
    id: 39,
    category: "歩行者保護",
    title: "路面電車の乗降客",
    text: "路面電車の停留場で乗り降りする人がいるときは、その安全に十分注意しなければならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "停留場付近では歩行者の動きが増え、接触事故の危険が高くなります。",
  },
  {
    id: 40,
    category: "二輪車",
    title: "二輪車の死角",
    text: "自動車の運転者は、二輪車が小さく見えやすく死角にも入りやすいことを意識する必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "二輪車は見落としやすいため、右左折や進路変更時は特に注意します。",
  },
  {
    id: 41,
    category: "積載",
    title: "積み荷の固定",
    text: "荷物を積むときは、走行中に落下しないようしっかり固定しなければならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "積載物の落下は重大事故につながるため、確実な固定が必要です。",
  },
  {
    id: 42,
    category: "故障・非常時",
    title: "故障で停止したとき",
    text: "やむを得ず道路上で停止したときは、ハザードランプなどで後続車に知らせることが大切である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "停止表示で後続車へ異常を伝え、二次事故を防ぐことが重要です。",
  },
  {
    id: 43,
    category: "交差点",
    title: "右左折前の寄せ",
    text: "左折前はできるだけ道路の左端に寄せ、右折前は道路の中央寄りに寄せるのが基本である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "進路変更と同じく、事前の寄せで他車に意図を伝え安全を高めます。",
  },
  {
    id: 44,
    category: "安全確認",
    title: "発進時の合図と確認",
    text: "発進するときは、合図を出した後にもう一度周囲を確認してから動き出すのがよい。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "合図後に周囲の状況が変わることもあるため、再確認してから発進します。",
  },
  {
    id: 45,
    category: "優先関係",
    title: "緊急自動車",
    text: "緊急自動車が近づいてきたときは、進路を譲り、その通行を妨げないようにしなければならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "救急車や消防車などには速やかに進路を譲る義務があります。",
  },
  {
    id: 46,
    category: "駐停車",
    title: "横断歩道の手前",
    text: "横断歩道とその手前5メートル以内は、原則として駐停車禁止である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "歩行者の安全確保のため、横断歩道付近の駐停車は禁止されています。",
  },
  {
    id: 47,
    category: "悪条件",
    title: "強風時のハンドル",
    text: "橋の上やトンネルの出口などで横風を受けることがあるため、ハンドルをしっかり持って進行する必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "横風で進路が乱れやすい場所では、速度を控えめにして操作を安定させます。",
  },
  {
    id: 48,
    category: "夜間運転",
    title: "駐車車両の陰",
    text: "夜間は、駐車車両の陰から歩行者が現れることを予測して通過する必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "夜間は発見が遅れやすいため、隠れた危険を予測して減速することが重要です。",
  },
  {
    id: 49,
    category: "信号",
    title: "赤色点滅信号",
    text: "赤色の点滅信号では、一時停止して安全を確認してから進行しなければならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "赤点滅は停止が必要です。黄色点滅との違いを混同しないことが大切です。",
  },
  {
    id: 50,
    category: "二輪車",
    title: "交差点での二輪車",
    text: "交差点で二輪車が直進してくるときは、その速度を実際より遅く見誤りやすいので注意が必要である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "二輪車は距離感や速度感を誤認しやすく、右折時などに特に危険です。",
  },
  {
    id: 51,
    category: "歩行者保護",
    title: "停車中の通学バス",
    text: "児童が乗り降りする車両の付近では、飛び出しを予測して慎重に進行する必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "子どもは周囲確認が不十分なまま動くこともあるため、強い注意が必要です。",
  },
  {
    id: 52,
    category: "合図",
    title: "合図の消し忘れ",
    text: "進路変更や右左折が終わったら、合図は速やかに消す必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "合図の消し忘れは周囲を誤解させる原因となり危険です。",
  },
  {
    id: 53,
    category: "故障・非常時",
    title: "踏切内故障",
    text: "踏切内で故障したときは、非常ボタンや発炎筒などを使って列車に危険を知らせることが重要である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "まず人命確保と列車への危険通知を優先します。",
  },
  {
    id: 54,
    category: "優先関係",
    title: "狭い道路から広い道路へ",
    text: "交差点で幅の広い道路を通行する車は、狭い道路から入ってくる車より一般に優先される。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "道路の幅や優先道路の指定は交差点の優先関係に関わります。",
  },
  {
    id: 55,
    category: "標識・標示",
    title: "車両通行止め",
    text: "車両通行止めの標識がある道路には、自動車も原動機付自転車も入れない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "車両通行止めは対象となる車両全般の進入を禁止する標識です。",
  },
  {
    id: 56,
    category: "安全確認",
    title: "車線変更前の死角",
    text: "車線変更前は、ミラーで見えない死角に車がいないかを目視で確かめるべきである。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "死角確認を怠ると接触事故の原因になります。目視は必須です。",
  },
  {
    id: 57,
    category: "徐行・速度",
    title: "住宅街の走行",
    text: "住宅街では歩行者や自転車の急な飛び出しに備え、速度を控えめにするのが安全である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "生活道路では潜在的な危険が多く、速すぎる運転は不適切です。",
  },
  {
    id: 58,
    category: "交差点",
    title: "右折待ちの位置",
    text: "右折待ちをするときは、対向直進車の邪魔にならない位置で、交差点の中心の内側に入りすぎないようにする。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "右折待ち位置が悪いと対向車や後続車の流れを妨げて危険です。",
  },
  {
    id: 59,
    category: "悪条件",
    title: "凍結路のブレーキ",
    text: "凍結した道路では急ブレーキや急ハンドルを避け、できるだけ穏やかな操作をする必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "滑りやすい路面では急な操作がスリップの原因になります。",
  },
  {
    id: 60,
    category: "駐停車",
    title: "車庫入れの切り返し",
    text: "車庫入れなどで切り返すときは、急いで操作せず、その都度周囲の安全を確認しながら行うべきである。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "低速の場面でも接触事故は多いため、落ち着いた確認と操作が必要です。",
  },
  {
    id: 61,
    category: "標識・標示",
    title: "追い越しのためのはみ出し禁止",
    text: "道路中央線が黄色の実線で示されているとき、その意味として最も適切なものはどれか。",
    choices: [
      "追い越しのためのはみ出し通行が禁止される",
      "徐行しなければならない",
      "一時停止しなければならない",
      "駐車してはならない",
    ],
    answer: 0,
    explanation:
      "黄色実線は、追い越しのために右側部分へはみ出す通行の禁止を示す代表例です。",
  },
  {
    id: 62,
    category: "信号",
    title: "赤色点滅信号の行動",
    text: "赤色の点滅信号に出会ったときの行動として正しいものはどれか。",
    choices: [
      "一時停止して安全確認後に進む",
      "徐行して進む",
      "そのまま進んでもよい",
      "必ず迂回する",
    ],
    answer: 0,
    explanation:
      "赤色点滅は停止義務があります。黄色点滅との区別が重要です。",
  },
  {
    id: 63,
    category: "交差点",
    title: "右折の優先関係",
    text: "信号のない交差点で右折しようとするとき、特に優先して妨げてはならない相手として適切なのはどれか。",
    choices: [
      "対向直進車",
      "自分の後ろの車だけ",
      "駐車中の車だけ",
      "対向車線の停止車両だけ",
    ],
    answer: 0,
    explanation:
      "右折車は対向直進車や左折車の進行を妨げないのが原則です。",
  },
  {
    id: 64,
    category: "歩行者保護",
    title: "横断歩道前の対応",
    text: "横断歩道の手前で歩行者が横断しようとしているとき、最も適切な行動はどれか。",
    choices: [
      "横断歩道の手前で一時停止し、歩行者の通行を妨げない",
      "クラクションを鳴らして先に進む",
      "歩行者が渡り始める前に急いで通過する",
      "対向車が止まっていなければ止まらなくてよい",
    ],
    answer: 0,
    explanation:
      "横断しようとする歩行者がいれば、その通行を妨げない対応が必要です。",
  },
  {
    id: 65,
    category: "安全確認",
    title: "進路変更前の確認順序",
    text: "進路変更を行う前の確認として最も適切なものはどれか。",
    choices: [
      "ミラー、合図、目視で安全確認し、周囲の反応を見てから進路変更する",
      "すぐにハンドルを切ってから合図する",
      "後ろを見ずに前方だけ見て動く",
      "合図を出せば確認は不要である",
    ],
    answer: 0,
    explanation:
      "進路変更では死角確認を含めた安全確認と早めの合図が必要です。",
  },
  {
    id: 66,
    category: "悪条件",
    title: "凍結路面での操作",
    text: "凍結した道路を運転するときの操作として最も適切なものはどれか。",
    choices: [
      "急ブレーキや急ハンドルを避け、穏やかに操作する",
      "制動力を確かめるため急ブレーキを繰り返す",
      "速度を上げて一気に通過する",
      "車間距離を短くして走る",
    ],
    answer: 0,
    explanation:
      "凍結路では穏やかな操作と十分な車間距離が基本です。",
  },
  {
    id: 67,
    category: "駐停車",
    title: "駐停車禁止場所",
    text: "次のうち、原則として駐停車が禁止される場所はどれか。",
    choices: [
      "横断歩道とその手前5メートル以内",
      "見通しの良い直線道路",
      "十分広い路肩のある場所",
      "自宅前の私道",
    ],
    answer: 0,
    explanation:
      "横断歩道付近は歩行者保護のため駐停車禁止です。",
  },
  {
    id: 68,
    category: "優先関係",
    title: "緊急自動車が接近したとき",
    text: "緊急自動車が後方から接近してきたときの行動として適切なのはどれか。",
    choices: [
      "進路を譲り、妨げないようにする",
      "速度を上げて前に出る",
      "中央に寄って進路をふさぐ",
      "クラクションで合図を返すだけでよい",
    ],
    answer: 0,
    explanation:
      "緊急自動車の通行を妨げないよう、速やかに進路を譲る必要があります。",
  },
  {
    id: 69,
    category: "踏切",
    title: "踏切で故障したとき",
    text: "踏切内で車が動かなくなったとき、最初に優先すべき対応として最も適切なものはどれか。",
    choices: [
      "非常ボタンなどで列車へ危険を知らせ、人の安全を確保する",
      "その場で修理を続ける",
      "警報が鳴り止むまで車内で待つ",
      "後続車にだけ事情を説明する",
    ],
    answer: 0,
    explanation:
      "踏切内の故障は列車との衝突回避が最優先です。",
  },
  {
    id: 70,
    category: "二輪車",
    title: "二輪車への注意",
    text: "二輪車に対する自動車の運転者の注意として最も適切なものはどれか。",
    choices: [
      "小さく見えやすく死角に入りやすいことを意識する",
      "速度が遅いので確認しなくてよい",
      "雨の日は走っていないと考えてよい",
      "左折時でも左後方の確認は不要である",
    ],
    answer: 0,
    explanation:
      "二輪車は見落としやすいため、特に右左折と進路変更時に注意します。",
  },
  {
    id: 71,
    category: "合図",
    title: "左折の合図開始地点",
    text: "左折するとき、合図を始める地点として最も適切なのはどれか。",
    choices: [
      "交差点の手前30メートルの地点",
      "交差点に入ってから",
      "停止線を越えてから",
      "曲がり終わったあと",
    ],
    answer: 0,
    explanation:
      "右左折の合図は交差点手前30メートルから行うのが原則です。",
  },
  {
    id: 72,
    category: "徐行・速度",
    title: "徐行の説明",
    text: "徐行の説明として最も適切なものはどれか。",
    choices: [
      "すぐに停止できるような速度で進むこと",
      "時速20キロ以下で進むこと",
      "アイドリングのまま進むこと",
      "歩行者がいない道路だけで行うこと",
    ],
    answer: 0,
    explanation:
      "徐行は具体的な時速でなく、直ちに停止できる速度で進むことを指します。",
  },
  {
    id: 73,
    category: "標識・標示",
    title: "警笛鳴らせ標識",
    text: "『警笛鳴らせ』の標識がある場所では、必要に応じて警音器を使用しなければならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "見通しの悪い山道などでは警音器使用の義務がある場所があります。",
  },
  {
    id: 74,
    category: "安全確認",
    title: "駐車車両の側方通過",
    text: "駐車車両のそばを通るときは、その陰から人が出てくる可能性を考えて安全な間隔を取る必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "駐車車両の陰は典型的な死角で、飛び出し予測が重要です。",
  },
  {
    id: 75,
    category: "歩行者保護",
    title: "歩道通行中の歩行者",
    text: "歩道を横切って道路外施設へ入るときは、歩道を通行する歩行者を妨げてはならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "歩道横断時は歩行者優先です。店舗や駐車場へ入る場面でも同じです。",
  },
  {
    id: 76,
    category: "交差点",
    title: "左方優先",
    text: "交通整理の行われていない同じ幅くらいの交差点では、左方から来る車が優先される。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "同幅程度の交差点では、左方優先ではなく『左方から進行してくる車が優先』です。自車から見て左ではなく、相手が自分の左方から来るかで判断します。",
  },
  {
    id: 77,
    category: "信号",
    title: "青信号でも注意",
    text: "青信号で進行できる場合でも、前方の安全を確認せずに進んではならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "信号の優先と安全確認義務は別です。交差点内の危険確認は必要です。",
  },
  {
    id: 78,
    category: "駐停車",
    title: "消火栓付近",
    text: "消火栓の5メートル以内は、原則として駐停車が禁止されている。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "緊急活動の支障となるため、消火栓や消防用防火水そう付近は駐停車禁止です。",
  },
  {
    id: 79,
    category: "夜間運転",
    title: "ロービームでの注意",
    text: "下向きライトでは見える範囲が短くなるため、速度を出しすぎると危険である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "ライトの照射距離に応じて停止可能な速度で走る必要があります。",
  },
  {
    id: 80,
    category: "悪条件",
    title: "雨の日のマンホール",
    text: "雨の日はマンホールや白線の上が滑りやすくなるので注意が必要である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "二輪車だけでなく四輪車でも滑りやすく、急操作は危険です。",
  },
  {
    id: 81,
    category: "合図",
    title: "徐行や停止の意思表示",
    text: "後続車が近いときの減速や停止では、早めにブレーキランプで意図を伝えることが安全につながる。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "追突防止には早めの減速と後続車への意図伝達が有効です。",
  },
  {
    id: 82,
    category: "踏切",
    title: "踏切内の変速",
    text: "踏切内では変速操作を避け、エンストしないよう注意して通過するほうがよい。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "踏切内の不要な変速はエンストの原因になり得ます。",
  },
  {
    id: 83,
    category: "優先関係",
    title: "待避所の利用",
    text: "狭い道路で近くに待避所があるなら、上り下りにかかわらず入りやすい側が利用して行き違うのが安全である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "実際の行き違いでは周囲の状況に応じて柔軟に安全な場所を使います。",
  },
  {
    id: 84,
    category: "二輪車",
    title: "二輪車の追い抜き",
    text: "渋滞中でも、二輪車が左右から接近してくることを予測してドア開けや進路変更をする必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "渋滞中ほど側方接近に注意が必要です。",
  },
  {
    id: 85,
    category: "故障・非常時",
    title: "発炎筒の目的",
    text: "発炎筒は後続車へ危険を知らせるために使うものである。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "夜間や視界不良時の二次事故防止に有効です。",
  },
  {
    id: 86,
    category: "積載",
    title: "視界をさえぎる荷物",
    text: "前方や後方の視界を妨げるような荷物の積み方は危険であり避けるべきである。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "視界確保は安全運転の基本で、積載方法にも制約があります。",
  },
  {
    id: 87,
    category: "標識・標示",
    title: "一方通行",
    text: "一方通行の標識がある道路では、標識で示された方向にだけ通行できる。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "逆方向進入は危険で、重大な違反になります。",
  },
  {
    id: 88,
    category: "安全確認",
    title: "子どもの自転車",
    text: "子どもが乗る自転車は急な進路変更をすることがあるため、十分な側方間隔を取るほうがよい。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "予測しにくい動きへの備えが必要です。",
  },
  {
    id: 89,
    category: "歩行者保護",
    title: "白杖使用者",
    text: "白杖を持った人を見かけたときは、その通行を妨げないよう特に注意しなければならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "視覚障害者への配慮は交通弱者保護の重要項目です。",
  },
  {
    id: 90,
    category: "交差点",
    title: "左折時の巻き込み防止",
    text: "左折時は、できるだけ道路の左端に寄せて後続の二輪車などの巻き込みを防ぐことが大切である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "寄せ不足は巻き込み事故の原因になります。",
  },
  {
    id: 91,
    category: "信号",
    title: "青信号の意味",
    text: "青信号は『必ず進まなければならない』という意味である。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "青信号は進行できることを示しますが、安全確認なしに必ず進む義務はありません。",
  },
  {
    id: 92,
    category: "駐停車",
    title: "坂道での輪止め意識",
    text: "坂道で駐車するときは、車が動き出さないよう駐車ブレーキだけでなく周囲の状況も考える必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "逸走防止のため、ギア位置や停止位置にも注意します。",
  },
  {
    id: 93,
    category: "悪条件",
    title: "冠水路の通行",
    text: "深い水たまりや冠水路は無理に進入せず、危険を感じたら避ける判断も必要である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "エンジン停止や視界不良を招くおそれがあります。",
  },
  {
    id: 94,
    category: "夜間運転",
    title: "対向車への配慮",
    text: "対向車が近づいてきたら、必要に応じてライトを下向きにして相手の視界を妨げないようにする。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "上向きライトのままでは相手を幻惑させる危険があります。",
  },
  {
    id: 95,
    category: "優先関係",
    title: "広い道路が優先",
    text: "交通整理のない交差点で、明らかに幅の広い道路を通行している車は優先される場合がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "ただし優先であっても安全確認義務は残ります。",
  },
  {
    id: 96,
    category: "合図",
    title: "合図の継続",
    text: "右左折の合図は、その行為が終わるまで継続するのが原則である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "途中で消すと周囲が進路を誤認するおそれがあります。",
  },
  {
    id: 97,
    category: "二輪車",
    title: "交差点でのすり抜け予測",
    text: "停止中や低速時でも、二輪車が車の横を通り抜ける可能性を考えてドアや進路に注意するべきである。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "低速時ほど側方への注意が薄れがちなので意識が必要です。",
  },
  {
    id: 98,
    category: "故障・非常時",
    title: "高速道路での故障時",
    text: "高速道路で故障した場合は、車内にとどまり続けるよりも、状況に応じて安全な場所へ避難することが重要である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "後続車からの追突を避けるため、ガードレール外など安全確保が優先です。",
  },
  {
    id: 99,
    category: "積載",
    title: "荷物のはみ出し",
    text: "荷物が車体から大きくはみ出す場合、法令上の制限や標示が必要になることがある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "積載物の大きさには制限があり、一定の場合は標識や措置が必要です。",
  },
  {
    id: 100,
    category: "標識・標示",
    title: "駐車禁止標識",
    text: "駐車禁止標識のある場所では、短時間の駐車でも禁止される。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "駐車禁止は停車と違い、駐車に該当する行為を禁じています。",
  },
  {
    id: 101,
    category: "信号",
    title: "黄信号の原則",
    text: "黄信号では、安全に停止できるなら停止線の手前で止まるのが原則である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "無理な進行は危険で、原則停止が基本です。",
  },
  {
    id: 102,
    category: "交差点",
    title: "交差点直前の追い越し",
    text: "交差点やその手前30メートル以内では、原則として追い越しが禁止される場合がある。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "追い越し禁止場所は踏切や横断歩道付近などで、交差点手前30メートルという表現はそのままでは正確ではありません。",
  },
  {
    id: 103,
    category: "安全確認",
    title: "右後方の死角",
    text: "右へ進路変更するときも、右後方の死角を目視で確認する必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "左右どちらの進路変更でも、対応する側後方の死角確認が必要です。",
  },
  {
    id: 104,
    category: "歩行者保護",
    title: "歩道横断前の一時停止意識",
    text: "店舗や駐車場へ入るために歩道を横切るときは、歩行者の有無を確認し、必要なら一時停止するべきである。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "歩道上は歩行者優先で、出入り車両は特に慎重さが求められます。",
  },
  {
    id: 105,
    category: "悪条件",
    title: "雪道の発進",
    text: "雪道での発進では、アクセルを強く踏み込まず、ゆっくり操作するほうが空転を防ぎやすい。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "急な加速は空転の原因になります。",
  },
  {
    id: 106,
    category: "夜間運転",
    title: "幻惑からの回復",
    text: "対向車のライトで一時的に見えづらくなったときは、速度を落とし注意して進むべきである。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "幻惑時は危険発見が遅れるため、減速が必要です。",
  },
  {
    id: 107,
    category: "優先関係",
    title: "停止線のある側",
    text: "交通整理のない交差点で一方に停止線がある場合、停止線のない道路を通行する車が優先されることがある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "停止規制のある側は、ない側に進路を譲る関係になります。",
  },
  {
    id: 108,
    category: "合図",
    title: "進路変更合図の時期",
    text: "進路変更の合図は、進路を変える約3秒前に出すのが原則である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "時間基準で覚える代表項目です。",
  },
  {
    id: 109,
    category: "二輪車",
    title: "左折前の二輪車確認",
    text: "左折直前に左ミラーだけ見れば、左後方の二輪車確認として十分である。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "ミラーだけでは死角があるため、目視確認も必要です。",
  },
  {
    id: 110,
    category: "故障・非常時",
    title: "事故直後の二次事故防止",
    text: "事故や故障の直後は、けが人の救護と二次事故防止の措置を優先する必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "救護義務と危険防止措置は重要な基本です。",
  },
  {
    id: 111,
    category: "積載",
    title: "軽い荷物でも固定",
    text: "軽い荷物でも、急ブレーキで動くおそれがあるなら固定したほうが安全である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "重量に関係なく、車内外の荷物は危険物になり得ます。",
  },
  {
    id: 112,
    category: "標識・標示",
    title: "徐行標識",
    text: "『徐行』の標識がある場所では、直ちに停止できる速度で進まなければならない。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "徐行標識は速度を具体数値でなく、停止可能な速度に制限するものです。",
  },
  {
    id: 113,
    category: "信号",
    title: "歩行者用信号への注意",
    text: "交差点では車両用信号だけでなく、歩行者用信号の状況も歩行者の動き予測に役立つことがある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "周辺の信号状況から歩行者の動きを予測することは安全運転に有効です。",
  },
  {
    id: 114,
    category: "交差点",
    title: "交差点の中心内側に入りすぎない",
    text: "右折待ちでは、交差点の中心の内側に入りすぎると、曲がる方向や相手車線を妨げるおそれがある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "右折待ち位置は本番でも問われやすい安全ポイントです。",
  },
  {
    id: 115,
    category: "安全確認",
    title: "車を降りた後の確認",
    text: "車を降りてドアを閉めるときも、後方から接近する自転車などに注意する必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "乗降全体を通じて安全確認が必要です。",
  },
  {
    id: 116,
    category: "歩行者保護",
    title: "歩行者のそばの通過",
    text: "歩行者のそばを通るときは、安全な間隔が取れないなら徐行するなど慎重に進むべきである。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "接触や驚かせる危険を防ぐため、余裕ある通行が必要です。",
  },
  {
    id: 117,
    category: "悪条件",
    title: "雨天時の制動距離",
    text: "雨天時は晴天時と比べ、制動距離が短くなる。",
    choices: ["正しい", "誤り"],
    answer: 1,
    explanation:
      "路面が滑りやすくなるため、制動距離は長くなります。",
  },
  {
    id: 118,
    category: "夜間運転",
    title: "夜間の歩行者の服装",
    text: "夜間は歩行者が暗い服装だと見えにくくなるので、昼間以上に注意が必要である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "歩行者の発見が遅れやすい典型例です。",
  },
  {
    id: 119,
    category: "優先関係",
    title: "優先でも油断しない",
    text: "自分が優先道路を通行していても、交差車両が出てくるおそれを考えて備える必要がある。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "優先は事故免責ではなく、安全確認は常に必要です。",
  },
  {
    id: 120,
    category: "踏切",
    title: "踏切の前での停止位置",
    text: "踏切で一時停止が必要な場合は、停止線があればその直前で止まるのが基本である。",
    choices: ["正しい", "誤り"],
    answer: 0,
    explanation:
      "停止位置は停止線が基準です。ない場合は踏切の直前で止まります。",
  },
].map((question) => ({
  ...question,
  searchText: `${question.title} ${question.text} ${question.category}`.toLowerCase(),
}));

const storageKey = "karimen-training-progress";
const examStorageKey = "karimen-training-exam-session";
const state = {
  category: "all",
  mode: "all",
  search: "",
  searchTimer: null,
  randomIds: null,
  progress: loadProgress(),
  examSession: null,
  lastExamWrongIds: [],
};

const elements = {
  categoryFilter: document.querySelector("#category-filter"),
  modeFilter: document.querySelector("#mode-filter"),
  searchInput: document.querySelector("#search-input"),
  questionList: document.querySelector("#question-list"),
  questionCount: document.querySelector("#question-count"),
  template: document.querySelector("#question-template"),
  categoryCardTemplate: document.querySelector("#category-card-template"),
  answeredCount: document.querySelector("#answered-count"),
  correctRate: document.querySelector("#correct-rate"),
  streakCount: document.querySelector("#streak-count"),
  startRandom: document.querySelector("#start-random"),
  resetProgress: document.querySelector("#reset-progress"),
  startExam: document.querySelector("#start-exam"),
  examSection: document.querySelector("#exam-section"),
  examBody: document.querySelector("#exam-body"),
  examTitle: document.querySelector("#exam-title"),
  closeExam: document.querySelector("#close-exam"),
  focusWeakness: document.querySelector("#focus-weakness"),
  clearFilters: document.querySelector("#clear-filters"),
  weakSummary: document.querySelector("#weak-summary"),
  categoryOverview: document.querySelector("#category-overview"),
  resumePanel: document.querySelector("#resume-panel"),
  resumeText: document.querySelector("#resume-text"),
  resumeExam: document.querySelector("#resume-exam"),
  discardExam: document.querySelector("#discard-exam"),
  exportProgress: document.querySelector("#export-progress"),
  importProgress: document.querySelector("#import-progress"),
};

initialize();

function initialize() {
  hydrateExamSession();
  populateCategories();
  bindEvents();
  render();
  renderResumePanel();
  registerServiceWorker();
}

function populateCategories() {
  const categories = [...new Set(questions.map((question) => question.category))];
  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    elements.categoryFilter.append(option);
  }
}

function bindEvents() {
  elements.categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    state.randomIds = null;
    renderQuestions();
  });

  elements.modeFilter.addEventListener("change", (event) => {
    state.mode = event.target.value;
    state.randomIds = null;
    renderQuestions();
  });

  elements.searchInput.addEventListener("input", (event) => {
    const nextValue = event.target.value.trim().toLowerCase();
    window.clearTimeout(state.searchTimer);
    state.searchTimer = window.setTimeout(() => {
      state.search = nextValue;
      state.randomIds = null;
      renderQuestions();
    }, 120);
  });

  elements.startRandom.addEventListener("click", () => {
    const source = getFilteredQuestions({ ignoreRandom: true });
    state.randomIds = new Set(shuffle([...source]).slice(0, 5).map((question) => question.id));
    renderQuestions();
    window.scrollTo({ top: document.querySelector(".question-header").offsetTop - 20, behavior: "smooth" });
  });

  elements.resetProgress.addEventListener("click", () => {
    state.progress = {};
    state.randomIds = null;
    saveProgress();
    render();
    closeExamMode();
  });

  elements.startExam.addEventListener("click", () => {
    startExamMode();
  });

  elements.closeExam.addEventListener("click", () => {
    closeExamMode();
  });

  elements.focusWeakness.addEventListener("click", () => {
    applyWeaknessFilter();
  });

  elements.clearFilters.addEventListener("click", () => {
    resetFilters();
  });

  elements.resumeExam.addEventListener("click", () => {
    if (!state.examSession) {
      return;
    }
    elements.examTitle.textContent = state.examSession.title;
    elements.examSection.classList.remove("hidden");
    renderExamScreen();
    startExamTimer();
    elements.examSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  elements.discardExam.addEventListener("click", () => {
    discardSavedExam();
  });

  elements.exportProgress.addEventListener("click", () => {
    exportProgressData();
  });

  elements.importProgress.addEventListener("change", async (event) => {
    const [file] = event.target.files || [];
    if (!file) {
      return;
    }
    await importProgressData(file);
    event.target.value = "";
  });
}

function render() {
  renderQuestions();
  renderStats();
  renderStudySupport();
}

function renderQuestions() {
  const filtered = getFilteredQuestions();
  const fragment = document.createDocumentFragment();
  elements.questionList.innerHTML = "";
  elements.questionCount.textContent = `${filtered.length} / ${questions.length}問`;

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "条件に合う問題がありません。フィルタを変えてください。";
    elements.questionList.append(empty);
    return;
  }

  for (const question of filtered) {
    fragment.append(renderQuestionCard(question));
  }
  elements.questionList.append(fragment);
}

function renderQuestionCard(question) {
  const fragment = elements.template.content.cloneNode(true);
  const card = fragment.querySelector(".question-card");
  const category = fragment.querySelector(".category-badge");
  const status = fragment.querySelector(".question-status");
  const title = fragment.querySelector(".question-title");
  const text = fragment.querySelector(".question-text");
  const choices = fragment.querySelector(".choices");
  const button = fragment.querySelector(".answer-button");
  const feedback = fragment.querySelector(".feedback");
  const explanation = fragment.querySelector(".explanation");
  const progress = state.progress[question.id];

  category.textContent = question.category;
  status.textContent = progress ? (progress.correct ? "正解済み" : "要復習") : "未回答";
  title.textContent = `${question.id}. ${question.title}`;
  text.textContent = question.text;
  explanation.textContent = `解説: ${question.explanation}`;

  for (const [index, choiceText] of question.choices.entries()) {
    const label = document.createElement("label");
    label.className = "choice";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question-${question.id}`;
    input.value = String(index);

    const span = document.createElement("span");
    span.textContent = choiceText;

    label.append(input, span);
    choices.append(label);
  }

  if (progress) {
    feedback.textContent = progress.correct ? "前回は正解しました。" : "前回は不正解でした。";
    feedback.classList.add(progress.correct ? "correct" : "incorrect");
    explanation.classList.remove("hidden");
  }

  button.addEventListener("click", () => {
    const selected = card.querySelector(`input[name="question-${question.id}"]:checked`);

    if (!selected) {
      feedback.textContent = "選択肢を選んでください。";
      feedback.className = "feedback incorrect";
      return;
    }

    const isCorrect = Number(selected.value) === question.answer;
    state.progress[question.id] = { correct: isCorrect, answeredAt: Date.now() };
    saveProgress();

    status.textContent = isCorrect ? "正解済み" : "要復習";
    feedback.textContent = isCorrect ? "正解です。" : "不正解です。";
    feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
    explanation.classList.remove("hidden");
    render();
  });

  return fragment;
}

function renderStats() {
  const answers = Object.values(state.progress);
  const answeredCount = answers.length;
  const correctCount = answers.filter((item) => item.correct).length;
  const rate = answeredCount === 0 ? 0 : Math.round((correctCount / answeredCount) * 100);

  elements.answeredCount.textContent = String(answeredCount);
  elements.correctRate.textContent = `${rate}%`;
  elements.streakCount.textContent = String(getCurrentStreak());
}

function renderStudySupport() {
  const categoryStats = getCategoryStats();
  const weakCategories = categoryStats.filter((category) => category.answered > 0 && category.rate < 70);

  renderWeakSummary(weakCategories);
  renderCategoryOverview(categoryStats);
}

function renderWeakSummary(weakCategories) {
  elements.weakSummary.innerHTML = "";

  if (weakCategories.length === 0) {
    const message = document.createElement("p");
    message.className = "support-note";
    message.textContent =
      "まだ苦手分野は出ていません。数問解くと、正答率の低いカテゴリがここに出ます。";
    elements.weakSummary.append(message);
    return;
  }

  const title = document.createElement("p");
  title.className = "support-note";
  title.textContent = "復習優先:";
  elements.weakSummary.append(title);

  const chipRow = document.createElement("div");
  chipRow.className = "weak-chip-row";

  for (const category of weakCategories) {
    const button = document.createElement("button");
    button.className = "weak-chip";
    button.type = "button";
    button.textContent = `${category.name} ${category.rate}%`;
    button.addEventListener("click", () => {
      state.category = category.name;
      state.mode = "incorrect";
      state.randomIds = null;
      syncFilters();
      renderQuestions();
      scrollToQuestions();
    });
    chipRow.append(button);
  }

  elements.weakSummary.append(chipRow);
}

function renderCategoryOverview(categoryStats) {
  const fragment = document.createDocumentFragment();
  elements.categoryOverview.innerHTML = "";

  for (const category of categoryStats) {
    const card = elements.categoryCardTemplate.content.cloneNode(true);
    const title = card.querySelector(".category-card-title");
    const subtitle = card.querySelector(".category-card-subtitle");
    const fill = card.querySelector(".category-progress-fill");
    const progressText = card.querySelector(".category-progress-text");
    const practiceButton = card.querySelector(".category-card-button");
    const miniTestButton = card.querySelector(".category-mini-test-button");

    title.textContent = category.name;
    subtitle.textContent =
      category.answered === 0
        ? `全${category.total}問 / まだ未着手`
        : `${category.correct} / ${category.answered}問正解`;
    fill.style.width = `${category.rate}%`;
    progressText.textContent = `正答率 ${category.rate}%`;

    practiceButton.addEventListener("click", () => {
      state.category = category.name;
      state.randomIds = null;
      syncFilters();
      renderQuestions();
      scrollToQuestions();
    });

    miniTestButton.addEventListener("click", () => {
      const pool = shuffle(questions.filter((question) => question.category === category.name)).slice(0, 10);
      startCustomExam({
        title: `${category.name} 10問テスト`,
        pool,
        durationSeconds: pool.length * 40,
      });
    });

    fragment.append(card);
  }

  elements.categoryOverview.append(fragment);
}

function getCurrentStreak() {
  const answered = Object.entries(state.progress)
    .map(([id, value]) => ({ id: Number(id), ...value }))
    .sort((left, right) => right.answeredAt - left.answeredAt);

  let streak = 0;
  for (const item of answered) {
    if (!item.correct) {
      break;
    }
    streak += 1;
  }
  return streak;
}

function getCategoryStats() {
  const categories = [...new Set(questions.map((question) => question.category))];
  return categories.map((name) => {
    const categoryQuestions = questions.filter((question) => question.category === name);
    const answered = categoryQuestions.filter((question) => state.progress[question.id]);
    const correct = answered.filter((question) => state.progress[question.id].correct).length;
    const rate = answered.length === 0 ? 0 : Math.round((correct / answered.length) * 100);

    return {
      name,
      total: categoryQuestions.length,
      answered: answered.length,
      correct,
      rate,
    };
  });
}

function getFilteredQuestions(options = {}) {
  return getFilteredQuestionsBase(options);
}

function getFilteredQuestionsBase(options = {}) {
  const { ignoreRandom = false } = options;
  return questions.filter((question) => {
    const matchesCategory = state.category === "all" || question.category === state.category;
    const matchesSearch =
      state.search === "" || question.searchText.includes(state.search);
    const progress = state.progress[question.id];
    const matchesMode =
      state.mode === "all" ||
      (state.mode === "incorrect" && progress && !progress.correct) ||
      (state.mode === "unanswered" && !progress);
    const matchesRandom =
      ignoreRandom || state.randomIds === null || state.randomIds.has(question.id);

    return matchesCategory && matchesSearch && matchesMode && matchesRandom;
  });
}

function startExamMode() {
  const pool = shuffle([...questions]).slice(0, Math.min(50, questions.length));
  startCustomExam({
    title: "仮免 本番風 50問 模試",
    pool,
    durationSeconds: pool.length === 50 ? 30 * 60 : pool.length * 40,
  });
}

function startCustomExam({ title, pool, durationSeconds }) {
  state.randomIds = null;
  state.examSession = {
    title,
    pool,
    currentIndex: 0,
    answers: {},
    flagged: {},
    durationSeconds,
    deadline: Date.now() + durationSeconds * 1000,
    timerId: null,
    view: "question",
  };

  elements.examTitle.textContent = title;
  persistExamSession();
  renderResumePanel();
  elements.examSection.classList.remove("hidden");
  renderExamScreen();
  startExamTimer();
  elements.examSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function finishExam() {
  if (!state.examSession) {
    return;
  }

  const session = state.examSession;
  window.clearInterval(session.timerId);
  const { pool, answers } = session;
  let score = 0;
  const wrongIds = [];
  const result = document.createElement("div");
  result.className = "exam-result";
  const breakdown = document.createElement("div");
  breakdown.className = "exam-breakdown";

  for (const question of pool) {
    const selected = answers[question.id];
    const isCorrect = selected === question.answer;
    if (isCorrect) {
      score += 1;
    } else {
      wrongIds.push(question.id);
    }

    if (selected !== undefined) {
      state.progress[question.id] = { correct: isCorrect, answeredAt: Date.now() };
    }

    const line = document.createElement("p");
    line.className = "exam-breakdown-line";
    line.textContent =
      `${question.title}: ${isCorrect ? "正解" : "不正解"} / 正答は「${question.choices[question.answer]}」 / ${question.explanation}`;
    breakdown.append(line);
  }

  saveProgress();
  render();
  state.lastExamWrongIds = wrongIds;
  result.append(createResultHeading(score, pool.length));

  const summary = document.createElement("p");
  summary.className = "exam-summary-text";
  summary.textContent =
    score >= Math.ceil(pool.length * 0.8)
      ? "本番モードとしては良い仕上がりです。苦手分野だけ解き直して安定させてください。"
      : "苦手だけ表示とカテゴリ別復習を使って、落とした分野から詰めるのが早いです。";

  const actions = document.createElement("div");
  actions.className = "exam-result-actions";

  const retryWrongButton = document.createElement("button");
  retryWrongButton.type = "button";
  retryWrongButton.className = "button button-dark";
  retryWrongButton.textContent = "不正解だけ再挑戦";
  retryWrongButton.disabled = wrongIds.length === 0;
  retryWrongButton.addEventListener("click", () => {
    const retryPool = questions.filter((question) => wrongIds.includes(question.id));
    startCustomExam({
      title: "不正解だけ再挑戦",
      pool: retryPool,
      durationSeconds: Math.max(60, retryPool.length * 35),
    });
  });

  const retryFullButton = document.createElement("button");
  retryFullButton.type = "button";
  retryFullButton.className = "button button-secondary";
  retryFullButton.textContent = "同じセットでもう一度";
  retryFullButton.addEventListener("click", () => {
    startCustomExam({
      title: session.title,
      pool: [...pool],
      durationSeconds: session.durationSeconds,
    });
  });

  actions.append(retryWrongButton, retryFullButton);
  result.append(summary, actions, breakdown);
  elements.examBody.innerHTML = "";
  elements.examBody.append(result);
  state.examSession = null;
  localStorage.removeItem(examStorageKey);
  renderResumePanel();
}

function createResultHeading(score, total) {
  const heading = document.createElement("h3");
  heading.textContent = `結果: ${score} / ${total} 問正解`;
  return heading;
}

function closeExamMode() {
  if (state.examSession?.timerId) {
    window.clearInterval(state.examSession.timerId);
  }
  elements.examSection.classList.add("hidden");
  elements.examBody.innerHTML = "";
  persistExamSession();
  renderResumePanel();
}

function applyWeaknessFilter() {
  const weakCategories = getCategoryStats().filter((category) => category.answered > 0 && category.rate < 70);

  if (weakCategories.length === 0) {
    state.mode = "incorrect";
    state.category = "all";
  } else {
    state.category = weakCategories[0].name;
    state.mode = "incorrect";
  }

  state.randomIds = null;
  syncFilters();
  renderQuestions();
  scrollToQuestions();
}

function resetFilters() {
  state.category = "all";
  state.mode = "all";
  state.search = "";
  state.randomIds = null;
  elements.searchInput.value = "";
  syncFilters();
  renderQuestions();
}

function syncFilters() {
  elements.categoryFilter.value = state.category;
  elements.modeFilter.value = state.mode;
}

function scrollToQuestions() {
  window.scrollTo({ top: document.querySelector(".question-header").offsetTop - 20, behavior: "smooth" });
}

function renderExamScreen() {
  const session = state.examSession;
  if (!session) {
    return;
  }

  if (session.view === "review") {
    renderExamReview();
    return;
  }

  const currentQuestion = session.pool[session.currentIndex];
  const selectedAnswer = session.answers[currentQuestion.id];
  elements.examBody.innerHTML = "";

  const hud = document.createElement("div");
  hud.className = "exam-hud";

  const step = document.createElement("p");
  step.className = "exam-hud-step";
  step.textContent = `第 ${session.currentIndex + 1} / ${session.pool.length} 問`;

  const timer = document.createElement("p");
  timer.className = "exam-hud-timer";
  timer.textContent = `残り ${formatRemainingTime(session.deadline)}`;

  const completion = document.createElement("p");
  completion.className = "exam-hud-step";
  completion.textContent = `回答済み ${getAnsweredCount(session)} / ${session.pool.length}`;

  const progress = document.createElement("div");
  progress.className = "exam-progress-bar";

  const progressFill = document.createElement("span");
  progressFill.className = "exam-progress-fill";
  progressFill.style.width = `${((session.currentIndex + 1) / session.pool.length) * 100}%`;
  progress.append(progressFill);

  hud.append(step, timer, completion, progress);

  const wrapper = document.createElement("section");
  wrapper.className = "exam-question exam-question-main";

  const heading = document.createElement("h3");
  heading.textContent = currentQuestion.title;

  const text = document.createElement("p");
  text.className = "question-text";
  text.textContent = currentQuestion.text;

  const note = document.createElement("p");
  note.className = "exam-note";
  note.textContent = "設問を読んで、最も適切な答えを1つ選んでください。";

  const choices = document.createElement("div");
  choices.className = "choices";

  for (const [choiceIndex, choiceText] of currentQuestion.choices.entries()) {
    const label = document.createElement("label");
    label.className = "choice";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `exam-${currentQuestion.id}`;
    input.value = String(choiceIndex);
    input.checked = selectedAnswer === choiceIndex;
    input.addEventListener("change", () => {
      session.answers[currentQuestion.id] = choiceIndex;
      persistExamSession();
      updateExamNav();
    });

    const span = document.createElement("span");
    span.textContent = choiceText;

    label.append(input, span);
    choices.append(label);
  }

  const nav = document.createElement("div");
  nav.className = "exam-nav";

  const tools = document.createElement("div");
  tools.className = "exam-tools";

  const flagButton = document.createElement("button");
  flagButton.type = "button";
  flagButton.className = "mini-button";
  flagButton.textContent = session.flagged[currentQuestion.id] ? "見直しフラグ解除" : "見直しフラグ";
  flagButton.addEventListener("click", () => {
    session.flagged[currentQuestion.id] = !session.flagged[currentQuestion.id];
    persistExamSession();
    renderExamScreen();
  });

  const reviewButton = document.createElement("button");
  reviewButton.type = "button";
  reviewButton.className = "mini-button";
  reviewButton.textContent = "見直し一覧";
  reviewButton.addEventListener("click", () => {
    session.view = "review";
    persistExamSession();
    renderExamReview();
  });

  tools.append(flagButton, reviewButton);

  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.className = "button button-secondary";
  backButton.textContent = "前の問題";
  backButton.disabled = session.currentIndex === 0;
  backButton.addEventListener("click", () => {
    session.currentIndex -= 1;
    persistExamSession();
    renderExamScreen();
  });

  const nextButton = document.createElement("button");
  nextButton.type = "button";
  nextButton.className = "button button-primary";
  nextButton.textContent = session.currentIndex === session.pool.length - 1 ? "採点する" : "次の問題";
  nextButton.disabled = selectedAnswer === undefined;
  nextButton.addEventListener("click", () => {
    if (session.currentIndex === session.pool.length - 1) {
      finishExam();
      return;
    }
    session.currentIndex += 1;
    persistExamSession();
    renderExamScreen();
  });

  nav.append(backButton, nextButton);
  wrapper.append(heading, text, note, choices, tools, nav);
  elements.examBody.append(hud, wrapper);
}

function updateExamNav() {
  const session = state.examSession;
  if (!session) {
    return;
  }
  persistExamSession();
  renderExamScreen();
}

function startExamTimer() {
  const session = state.examSession;
  if (!session) {
    return;
  }

  window.clearInterval(session.timerId);
  session.timerId = window.setInterval(() => {
    if (!state.examSession) {
      return;
    }

    if (Date.now() >= state.examSession.deadline) {
      finishExam();
      return;
    }

    const timer = elements.examBody.querySelector(".exam-hud-timer");
    if (timer) {
      timer.textContent = `残り ${formatRemainingTime(state.examSession.deadline)}`;
    }
  }, 1000);
}

function formatRemainingTime(deadline) {
  const remainingMs = Math.max(0, deadline - Date.now());
  const minutes = Math.floor(remainingMs / 60000);
  const seconds = Math.floor((remainingMs % 60000) / 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function renderExamReview() {
  const session = state.examSession;
  if (!session) {
    return;
  }

  elements.examBody.innerHTML = "";

  const header = document.createElement("div");
  header.className = "exam-review-header";

  const summary = document.createElement("p");
  summary.className = "exam-summary-text";
  summary.textContent =
    `回答済み ${getAnsweredCount(session)} / ${session.pool.length}問 ・ フラグ ${getFlaggedCount(session)}件`;

  const timer = document.createElement("p");
  timer.className = "exam-hud-timer";
  timer.textContent = `残り ${formatRemainingTime(session.deadline)}`;
  header.append(summary, timer);

  const list = document.createElement("div");
  list.className = "exam-review-list";

  for (const [index, question] of session.pool.entries()) {
    const item = document.createElement("button");
    item.type = "button";
    item.className = "exam-review-item";

    const answered = session.answers[question.id] !== undefined;
    const flagged = Boolean(session.flagged[question.id]);
    item.innerHTML =
      `<span class="exam-review-index">第${index + 1}問</span>` +
      `<span class="exam-review-title">${question.title}</span>` +
      `<span class="exam-review-state">${answered ? "回答済み" : "未回答"}${flagged ? " / フラグ" : ""}</span>`;

    item.addEventListener("click", () => {
      session.currentIndex = index;
      session.view = "question";
      persistExamSession();
      renderExamScreen();
    });
    list.append(item);
  }

  const actions = document.createElement("div");
  actions.className = "exam-result-actions";

  const backToQuestionButton = document.createElement("button");
  backToQuestionButton.type = "button";
  backToQuestionButton.className = "button button-secondary";
  backToQuestionButton.textContent = "問題に戻る";
  backToQuestionButton.addEventListener("click", () => {
    session.view = "question";
    persistExamSession();
    renderExamScreen();
  });

  const finishButton = document.createElement("button");
  finishButton.type = "button";
  finishButton.className = "button button-primary";
  finishButton.textContent = "この内容で採点する";
  finishButton.addEventListener("click", () => {
    finishExam();
  });

  actions.append(backToQuestionButton, finishButton);
  elements.examBody.append(header, list, actions);
}

function getAnsweredCount(session) {
  return Object.keys(session.answers).length;
}

function getFlaggedCount(session) {
  return Object.values(session.flagged).filter(Boolean).length;
}

function shuffle(items) {
  for (let index = items.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
  }
  return items;
}

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey) || "{}");
  } catch {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(storageKey, JSON.stringify(state.progress));
}

function persistExamSession() {
  if (!state.examSession) {
    localStorage.removeItem(examStorageKey);
    return;
  }

  const session = state.examSession;
  const payload = {
    title: session.title,
    currentIndex: session.currentIndex,
    answers: session.answers,
    flagged: session.flagged,
    durationSeconds: session.durationSeconds,
    deadline: session.deadline,
    view: session.view,
    pool: session.pool.map((question) => question.id),
  };
  localStorage.setItem(examStorageKey, JSON.stringify(payload));
}

function hydrateExamSession() {
  try {
    const raw = localStorage.getItem(examStorageKey);
    if (!raw) {
      return;
    }
    const saved = JSON.parse(raw);
    const pool = saved.pool
      .map((id) => questions.find((question) => question.id === id))
      .filter(Boolean);

    if (pool.length === 0 || Date.now() >= saved.deadline) {
      localStorage.removeItem(examStorageKey);
      return;
    }

    state.examSession = {
      title: saved.title,
      pool,
      currentIndex: saved.currentIndex ?? 0,
      answers: saved.answers ?? {},
      flagged: saved.flagged ?? {},
      durationSeconds: saved.durationSeconds,
      deadline: saved.deadline,
      timerId: null,
      view: saved.view ?? "question",
    };
  } catch {
    localStorage.removeItem(examStorageKey);
  }
}

function renderResumePanel() {
  if (!state.examSession) {
    elements.resumePanel.classList.add("hidden");
    return;
  }

  elements.resumePanel.classList.remove("hidden");
  elements.resumeText.textContent =
    `${state.examSession.title} の途中データがあります。` +
    ` ${getAnsweredCount(state.examSession)} / ${state.examSession.pool.length}問 回答済み。`;
}

function discardSavedExam() {
  if (state.examSession?.timerId) {
    window.clearInterval(state.examSession.timerId);
  }
  state.examSession = null;
  localStorage.removeItem(examStorageKey);
  elements.examSection.classList.add("hidden");
  elements.examBody.innerHTML = "";
  renderResumePanel();
}

function exportProgressData() {
  const payload = {
    exportedAt: new Date().toISOString(),
    progress: state.progress,
    lastExamWrongIds: state.lastExamWrongIds,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "karimen-progress.json";
  link.click();
  URL.revokeObjectURL(url);
}

async function importProgressData(file) {
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    if (!data.progress || typeof data.progress !== "object") {
      throw new Error("invalid");
    }
    state.progress = data.progress;
    state.lastExamWrongIds = Array.isArray(data.lastExamWrongIds) ? data.lastExamWrongIds : [];
    saveProgress();
    render();
  } catch {
    window.alert("学習データの読み込みに失敗しました。");
  }
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) {
    return;
  }
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

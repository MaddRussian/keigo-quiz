// Large bank of keigo questions organized by category
const questionBank = {
    interview: {
        name: "Interview Keigo",
        description: "Formal language for job interviews and business meetings",
        questions: [
            {
                question: "How would you politely introduce yourself in a job interview?",
                options: [
                    "田中です (Tanaka desu)",
                    "田中でございます (Tanaka de gozaimasu)",
                    "田中と申します (Tanaka to moushimasu)",
                    "田中だ (Tanaka da)"
                ],
                correct: 2,
                explanation: "田中と申します (Tanaka to moushimasu) is the humble form used in formal introductions."
            },
            {
                question: "What is the proper keigo way to say 'I understand' in an interview?",
                options: [
                    "分かりました (wakarimashita)",
                    "承知いたしました (shouchi itashimashita)",
                    "了解しました (ryoukai shimashita)",
                    "オッケー (okke)"
                ],
                correct: 1,
                explanation: "承知いたしました (shouchi itashimashita) is the most formal humble form."
            },
            {
                question: "How would you say 'I will do my best' in interview keigo?",
                options: [
                    "頑張ります (ganbarimasu)",
                    "精一杯努力いたします (seiippai doryoku itashimasu)",
                    "頑張る (ganbaru)",
                    "努力します (doryoku shimasu)"
                ],
                correct: 1,
                explanation: "精一杯努力いたします (seiippai doryoku itashimasu) is the most formal humble form."
            },
            {
                question: "What is the proper way to say 'thank you for your time' in an interview?",
                options: [
                    "ありがとう (arigatou)",
                    "お忙しい中、お時間をいただき、ありがとうございました (oisogashii naka, ojikan wo itadaki, arigatou gozaimashita)",
                    "時間をくれてありがとう (jikan wo kurete arigatou)",
                    "ありがとうございます (arigatou gozaimasu)"
                ],
                correct: 1,
                explanation: "お忙しい中、お時間をいただき、ありがとうございました is the most formal way to thank someone for their time."
            },
            {
                question: "How would you say 'I am interested in this position' in interview keigo?",
                options: [
                    "このポジションに興味があります (kono position ni kyoumi ga arimasu)",
                    "この職務に大変興味を持っております (kono shokumu ni taihen kyoumi wo motte orimasu)",
                    "この仕事が好きです (kono shigoto ga suki desu)",
                    "このポジションが欲しいです (kono position ga hoshii desu)"
                ],
                correct: 1,
                explanation: "この職務に大変興味を持っております is the formal keigo way to express interest."
            },
            {
                question: "What is the proper way to say 'I have experience in this field'?",
                options: [
                    "この分野で経験があります (kono bunya de keiken ga arimasu)",
                    "この分野での経験を積んでまいりました (kono bunya de no keiken wo tsunde mairimashita)",
                    "この分野が得意です (kono bunya ga tokui desu)",
                    "この分野を知っています (kono bunya wo shitte imasu)"
                ],
                correct: 1,
                explanation: "この分野での経験を積んでまいりました is the humble form for 'I have accumulated experience'."
            },
            {
                question: "How would you say 'I am looking forward to working here'?",
                options: [
                    "ここで働くのを楽しみにしています (koko de hataraku no wo tanoshimi ni shite imasu)",
                    "ここで働かせていただけることを楽しみにしております (koko de hatarakasete itadakeru koto wo tanoshimi ni shite orimasu)",
                    "ここで働きたいです (koko de hatarakitai desu)",
                    "ここで働くのが楽しみです (koko de hataraku no ga tanoshimi desu)"
                ],
                correct: 1,
                explanation: "ここで働かせていただけることを楽しみにしております is the most formal humble form."
            },
            {
                question: "What is the proper way to say 'I can start immediately'?",
                options: [
                    "すぐに始められます (sugu ni hajimeraremasu)",
                    "いつでも開始いたせます (itsu demo kaishi itasemasu)",
                    "すぐに始めます (sugu ni hajimemasu)",
                    "いつでも始められます (itsu demo hajimeraremasu)"
                ],
                correct: 1,
                explanation: "いつでも開始いたせます is the humble form for 'I can start anytime'."
            },
            {
                question: "How would you say 'I am confident in my abilities'?",
                options: [
                    "自分の能力に自信があります (jibun no nouryoku ni jishin ga arimasu)",
                    "自分の能力に自信を持っております (jibun no nouryoku ni jishin wo motte orimasu)",
                    "自分の能力を信じています (jibun no nouryoku wo shinjite imasu)",
                    "自分の能力に自信がある (jibun no nouryoku ni jishin ga aru)"
                ],
                correct: 1,
                explanation: "自分の能力に自信を持っております is the formal keigo way to express confidence."
            },
            {
                question: "What is the proper way to say 'I am willing to learn'?",
                options: [
                    "学ぶつもりです (manabu tsumori desu)",
                    "学習する意欲を持っております (gakushuu suru iyoku wo motte orimasu)",
                    "学びたいです (manabitai desu)",
                    "学習します (gakushuu shimasu)"
                ],
                correct: 1,
                explanation: "学習する意欲を持っております is the formal keigo way to express willingness to learn."
            },
            {
                question: "How would you say 'I am available for overtime'?",
                options: [
                    "残業できます (zangyou dekimasu)",
                    "残業もお引き受けいたします (zangyou mo o-hikiuke itashimasu)",
                    "残業をします (zangyou wo shimasu)",
                    "残業ができます (zangyou ga dekimasu)"
                ],
                correct: 1,
                explanation: "残業もお引き受けいたします is the humble form for 'I will also accept overtime'."
            },
            {
                question: "What is the proper way to say 'I am a team player'?",
                options: [
                    "チームプレイヤーです (team player desu)",
                    "チームワークを大切にしております (teamwork wo taisetsu ni shite orimasu)",
                    "チームで働くのが好きです (team de hataraku no ga suki desu)",
                    "チームプレイが得意です (team play ga tokui desu)"
                ],
                correct: 1,
                explanation: "チームワークを大切にしております is the formal keigo way to express being a team player."
            }
        ]
    },
    office: {
        name: "Office Keigo",
        description: "Polite language for workplace communication",
        questions: [
            {
                question: "How would you say 'I will submit the report' in office keigo?",
                options: [
                    "レポートを提出します (report wo teishutsu shimasu)",
                    "レポートを提出いたします (report wo teishutsu itashimasu)",
                    "レポートを出す (report wo dasu)",
                    "レポートを提出する (report wo teishutsu suru)"
                ],
                correct: 1,
                explanation: "レポートを提出いたします (report wo teishutsu itashimasu) is the humble form used in office settings."
            },
            {
                question: "What is the proper way to say 'I will check with my supervisor'?",
                options: [
                    "上司に確認します (joushi ni kakunin shimasu)",
                    "上司にご確認いただきます (joushi ni go-kakunin itadakimasu)",
                    "上司に聞きます (joushi ni kikimasu)",
                    "上司に確認いたします (joushi ni kakunin itashimasu)"
                ],
                correct: 3,
                explanation: "上司に確認いたします (joushi ni kakunin itashimasu) is the humble form for 'I will check'."
            },
            {
                question: "How would you say 'Please review this document' in office keigo?",
                options: [
                    "この書類を確認してください (kono shorui wo kakunin shite kudasai)",
                    "この書類をご確認いただけますでしょうか (kono shorui wo go-kakunin itadakemasu deshou ka)",
                    "この書類を見て (kono shorui wo mite)",
                    "この書類をチェックして (kono shorui wo check shite)"
                ],
                correct: 1,
                explanation: "この書類をご確認いただけますでしょうか is the most polite way to ask someone to review a document."
            },
            {
                question: "What is the proper way to say 'I apologize for the delay' in office keigo?",
                options: [
                    "遅れてすみません (okurete sumimasen)",
                    "遅延いたしまして、申し訳ございません (chien itashimashite, moushiwake gozaimasen)",
                    "遅れてごめん (okurete gomen)",
                    "遅れてしまいました (okurete shimaimashita)"
                ],
                correct: 1,
                explanation: "遅延いたしまして、申し訳ございません is the most formal apology for delays."
            },
            {
                question: "How would you say 'I will attend the meeting' in office keigo?",
                options: [
                    "会議に参加します (kaigi ni sanka shimasu)",
                    "会議に出席いたします (kaigi ni shusseki itashimasu)",
                    "会議に行きます (kaigi ni ikimasu)",
                    "会議に出ます (kaigi ni demasu)"
                ],
                correct: 1,
                explanation: "会議に出席いたします (kaigi ni shusseki itashimasu) is the formal humble form."
            },
            {
                question: "What is the proper way to say 'I will prepare the presentation'?",
                options: [
                    "プレゼンを準備します (presentation wo junbi shimasu)",
                    "プレゼンテーションを準備いたします (presentation wo junbi itashimasu)",
                    "プレゼンを作ります (presentation wo tsukurimasu)",
                    "プレゼンを用意します (presentation wo youi shimasu)"
                ],
                correct: 1,
                explanation: "プレゼンテーションを準備いたします is the humble form for 'I will prepare'."
            },
            {
                question: "How would you say 'Please send me the data' in office keigo?",
                options: [
                    "データを送ってください (data wo okutte kudasai)",
                    "データをお送りいただけますでしょうか (data wo o-okuri itadakemasu deshou ka)",
                    "データを送って (data wo okutte)",
                    "データをください (data wo kudasai)"
                ],
                correct: 1,
                explanation: "データをお送りいただけますでしょうか is the most polite way to request data."
            },
            {
                question: "What is the proper way to say 'I will contact you later'?",
                options: [
                    "後で連絡します (ato de renraku shimasu)",
                    "後ほどご連絡いたします (ato hodo go-renraku itashimasu)",
                    "後で電話します (ato de denwa shimasu)",
                    "後でメールします (ato de email shimasu)"
                ],
                correct: 1,
                explanation: "後ほどご連絡いたします is the humble form for 'I will contact you later'."
            },
            {
                question: "How would you say 'I need your approval' in office keigo?",
                options: [
                    "承認が必要です (shounin ga hitsuyou desu)",
                    "ご承認をいただけますでしょうか (go-shounin wo itadakemasu deshou ka)",
                    "承認してください (shounin shite kudasai)",
                    "承認をお願いします (shounin wo onegai shimasu)"
                ],
                correct: 1,
                explanation: "ご承認をいただけますでしょうか is the most polite way to request approval."
            },
            {
                question: "What is the proper way to say 'I will update the schedule'?",
                options: [
                    "スケジュールを更新します (schedule wo koushin shimasu)",
                    "スケジュールを更新いたします (schedule wo koushin itashimasu)",
                    "スケジュールを変更します (schedule wo henkou shimasu)",
                    "スケジュールを修正します (schedule wo shuusei shimasu)"
                ],
                correct: 1,
                explanation: "スケジュールを更新いたします is the humble form for 'I will update'."
            },
            {
                question: "How would you say 'I will coordinate with the team'?",
                options: [
                    "チームと調整します (team to chousei shimasu)",
                    "チームと調整いたします (team to chousei itashimasu)",
                    "チームと相談します (team to soudan shimasu)",
                    "チームと連絡します (team to renraku shimasu)"
                ],
                correct: 1,
                explanation: "チームと調整いたします is the humble form for 'I will coordinate'."
            },
            {
                question: "What is the proper way to say 'I will follow up on this matter'?",
                options: [
                    "この件をフォローします (kono ken wo follow shimasu)",
                    "この件をフォローアップいたします (kono ken wo follow-up itashimasu)",
                    "この件を確認します (kono ken wo kakunin shimasu)",
                    "この件を調べます (kono ken wo shirabemasu)"
                ],
                correct: 1,
                explanation: "この件をフォローアップいたします is the humble form for 'I will follow up'."
            }
        ]
    },
    customer: {
        name: "Customer Service Keigo",
        description: "Polite language for customer interactions",
        questions: [
            {
                question: "How would you say 'Welcome' to a customer in keigo?",
                options: [
                    "いらっしゃい (irasshai)",
                    "いらっしゃいませ (irasshaimase)",
                    "ようこそ (youkoso)",
                    "お越しください (okoshi kudasai)"
                ],
                correct: 1,
                explanation: "いらっしゃいませ (irasshaimase) is the standard keigo greeting for customers."
            },
            {
                question: "What is the proper way to say 'I will help you' to a customer?",
                options: [
                    "お手伝いします (otetsudai shimasu)",
                    "ご案内いたします (go-annai itashimasu)",
                    "助けます (tasukemasu)",
                    "サポートします (support shimasu)"
                ],
                correct: 1,
                explanation: "ご案内いたします (go-annai itashimasu) is the humble form for 'I will guide/help you'."
            },
            {
                question: "How would you say 'Please wait a moment' to a customer?",
                options: [
                    "ちょっと待って (chotto matte)",
                    "少々お待ちください (shoushou omachi kudasai)",
                    "待ってください (matte kudasai)",
                    "ちょっと待ってください (chotto matte kudasai)"
                ],
                correct: 1,
                explanation: "少々お待ちください (shoushou omachi kudasai) is the most polite way to ask customers to wait."
            },
            {
                question: "What is the proper way to say 'Thank you for your purchase'?",
                options: [
                    "買ってくれてありがとう (katte kurete arigatou)",
                    "ご購入いただき、ありがとうございます (go-kounyuu itadaki, arigatou gozaimasu)",
                    "買ってくれてありがとうございます (katte kurete arigatou gozaimasu)",
                    "購入ありがとう (kounyuu arigatou)"
                ],
                correct: 1,
                explanation: "ご購入いただき、ありがとうございます is the most formal way to thank customers."
            },
            {
                question: "How would you say 'I apologize for the inconvenience' to a customer?",
                options: [
                    "迷惑かけてすみません (meiwaku kakete sumimasen)",
                    "ご迷惑をおかけいたしまして、申し訳ございません (go-meiwaku wo okake itashimashite, moushiwake gozaimasen)",
                    "すみません (sumimasen)",
                    "ごめんなさい (gomen nasai)"
                ],
                correct: 1,
                explanation: "ご迷惑をおかけいたしまして、申し訳ございません is the most formal apology for inconveniencing someone."
            },
            {
                question: "What is the proper way to say 'How may I assist you today'?",
                options: [
                    "何かお手伝いできますか (nanika otetsudai dekimasu ka)",
                    "どのようなご用件でしょうか (dono you na go-youken deshou ka)",
                    "何かお手伝いしますか (nanika otetsudai shimasu ka)",
                    "何かご質問がありますか (nanika go-shitsumon ga arimasu ka)"
                ],
                correct: 1,
                explanation: "どのようなご用件でしょうか is the most polite way to ask how you can help."
            },
            {
                question: "How would you say 'I will check that for you' to a customer?",
                options: [
                    "確認します (kakunin shimasu)",
                    "ご確認いたします (go-kakunin itashimasu)",
                    "調べます (shirabemasu)",
                    "チェックします (check shimasu)"
                ],
                correct: 1,
                explanation: "ご確認いたします (go-kakunin itashimasu) is the humble form for 'I will check'."
            },
            {
                question: "What is the proper way to say 'Please come this way'?",
                options: [
                    "こちらへどうぞ (kochira e douzo)",
                    "こちらへお越しください (kochira e okoshi kudasai)",
                    "こちらへ来てください (kochira e kite kudasai)",
                    "こちらへ (kochira e)"
                ],
                correct: 1,
                explanation: "こちらへお越しください (kochira e okoshi kudasai) is the honorific form for 'please come'."
            },
            {
                question: "How would you say 'I will process your request'?",
                options: [
                    "リクエストを処理します (request wo shori shimasu)",
                    "ご要望を承りいたします (go-youbou wo uketamawari itashimasu)",
                    "リクエストを処理する (request wo shori suru)",
                    "要望を処理します (youbou wo shori shimasu)"
                ],
                correct: 1,
                explanation: "ご要望を承りいたします (go-youbou wo uketamawari itashimasu) is the humble form for 'I will accept your request'."
            },
            {
                question: "What is the proper way to say 'We appreciate your business'?",
                options: [
                    "ビジネスをありがとう (business wo arigatou)",
                    "ご愛顧いただき、ありがとうございます (go-aiko itadaki, arigatou gozaimasu)",
                    "お客様をありがとう (okyakusama wo arigatou)",
                    "取引をありがとう (torihiki wo arigatou)"
                ],
                correct: 1,
                explanation: "ご愛顧いただき、ありがとうございます is the most formal way to thank for patronage."
            },
            {
                question: "How would you say 'I will resolve this issue immediately'?",
                options: [
                    "この問題をすぐに解決します (kono mondai wo sugu ni kaiketsu shimasu)",
                    "この件を至急対応いたします (kono ken wo shikyuu taiou itashimasu)",
                    "この問題を解決する (kono mondai wo kaiketsu suru)",
                    "すぐに解決します (sugu ni kaiketsu shimasu)"
                ],
                correct: 1,
                explanation: "この件を至急対応いたします (kono ken wo shikyuu taiou itashimasu) is the humble form for 'I will respond immediately'."
            },
            {
                question: "What is the proper way to say 'Please let us know if you need anything else'?",
                options: [
                    "他に何かあったら教えてください (hoka ni nanika attara oshiete kudasai)",
                    "他にご不明な点がございましたら、お気軽にお申し付けください (hoka ni go-fumei na ten ga gozaimashitara, okigaru ni o-moushitsuke kudasai)",
                    "他に何かありますか (hoka ni nanika arimasu ka)",
                    "他にご質問がありますか (hoka ni go-shitsumon ga arimasu ka)"
                ],
                correct: 1,
                explanation: "他にご不明な点がございましたら、お気軽にお申し付けください is the most polite way to offer further assistance."
            }
        ]
    },
    formal: {
        name: "Formal Ceremony Keigo",
        description: "Most formal keigo for ceremonies and official events",
        questions: [
            {
                question: "How would you say 'I am honored to be here' in formal ceremony keigo?",
                options: [
                    "ここにいることを光栄に思います (koko ni iru koto wo kouei ni omoimasu)",
                    "この場に出席させていただき、光栄でございます (kono ba ni shusseki sasete itadaki, kouei de gozaimasu)",
                    "ここに来れて嬉しい (koko ni korarete ureshii)",
                    "出席できて光栄です (shusseki dekite kouei desu)"
                ],
                correct: 1,
                explanation: "この場に出席させていただき、光栄でございます is the most formal way to express honor."
            },
            {
                question: "What is the most formal way to say 'I deeply appreciate this opportunity'?",
                options: [
                    "この機会に感謝します (kono kikai ni kansha shimasu)",
                    "このような機会を賜り、深く感謝いたしております (kono you na kikai wo tamawari, fukaku kansha itashite orimasu)",
                    "この機会にありがとう (kono kikai ni arigatou)",
                    "機会をありがとうございます (kikai wo arigatou gozaimasu)"
                ],
                correct: 1,
                explanation: "このような機会を賜り、深く感謝いたしております is the most formal expression of gratitude."
            },
            {
                question: "How would you say 'I will do my utmost' in formal ceremony keigo?",
                options: [
                    "頑張ります (ganbarimasu)",
                    "最善を尽くします (saizen wo tsukushimasu)",
                    "精一杯努力いたします (seiippai doryoku itashimasu)",
                    "全力で取り組みます (zenryoku de torikumimasu)"
                ],
                correct: 2,
                explanation: "精一杯努力いたします (seiippai doryoku itashimasu) is the most formal humble form."
            },
            {
                question: "What is the proper way to say 'I humbly accept' in formal ceremony keigo?",
                options: [
                    "受け取ります (uketorimasu)",
                    "謹んでお受けいたします (tsutsushinde o-uke itashimasu)",
                    "受けます (ukemasu)",
                    "承諾します (shoudaku shimasu)"
                ],
                correct: 1,
                explanation: "謹んでお受けいたします (tsutsushinde o-uke itashimasu) is the most formal humble acceptance."
            },
            {
                question: "How would you say 'I express my deepest gratitude' in formal ceremony keigo?",
                options: [
                    "ありがとうございます (arigatou gozaimasu)",
                    "深く感謝いたします (fukaku kansha itashimasu)",
                    "心より感謝申し上げます (kokoro yori kansha moushiagemasu)",
                    "感謝します (kansha shimasu)"
                ],
                correct: 2,
                explanation: "心より感謝申し上げます (kokoro yori kansha moushiagemasu) is the most formal expression of gratitude."
            },
            {
                question: "What is the most formal way to say 'I am deeply moved'?",
                options: [
                    "感動しました (kandou shimashita)",
                    "深く感動いたしております (fukaku kandou itashite orimasu)",
                    "感動しています (kandou shite imasu)",
                    "感動です (kandou desu)"
                ],
                correct: 1,
                explanation: "深く感動いたしております (fukaku kandou itashite orimasu) is the most formal humble form."
            },
            {
                question: "How would you say 'I am privileged to participate' in formal ceremony keigo?",
                options: [
                    "参加できて光栄です (sanka dekite kouei desu)",
                    "参加させていただけることを光栄に存じます (sanka sasete itadakeru koto wo kouei ni zonjimasu)",
                    "参加できて嬉しいです (sanka dekite ureshii desu)",
                    "参加を光栄に思います (sanka wo kouei ni omoimasu)"
                ],
                correct: 1,
                explanation: "参加させていただけることを光栄に存じます is the most formal way to express privilege."
            },
            {
                question: "What is the proper way to say 'I offer my sincere congratulations'?",
                options: [
                    "おめでとうございます (omedetou gozaimasu)",
                    "心よりお祝い申し上げます (kokoro yori o-iwai moushiagemasu)",
                    "おめでとう (omedetou)",
                    "お祝いします (o-iwai shimasu)"
                ],
                correct: 1,
                explanation: "心よりお祝い申し上げます (kokoro yori o-iwai moushiagemasu) is the most formal way to offer congratulations."
            },
            {
                question: "How would you say 'I am indebted to you' in formal ceremony keigo?",
                options: [
                    "お世話になりました (osewa ni narimashita)",
                    "大変お世話になり、感謝いたしております (taihen osewa ni nari, kansha itashite orimasu)",
                    "お世話になりました (osewa ni narimashita)",
                    "ありがとうございました (arigatou gozaimashita)"
                ],
                correct: 1,
                explanation: "大変お世話になり、感謝いたしております is the most formal way to express indebtedness."
            },
            {
                question: "What is the most formal way to say 'I will remember this forever'?",
                options: [
                    "永遠に覚えています (eien ni oboete imasu)",
                    "永遠に心に刻み込ませていただきます (eien ni kokoro ni kizamikomasete itadakimasu)",
                    "永遠に覚えておきます (eien ni oboete okimasu)",
                    "永遠に忘れません (eien ni wasuremasen)"
                ],
                correct: 1,
                explanation: "永遠に心に刻み込ませていただきます is the most formal way to express eternal remembrance."
            },
            {
                question: "How would you say 'I am overwhelmed with emotion' in formal ceremony keigo?",
                options: [
                    "感情に圧倒されています (kanjou ni attou sarete imasu)",
                    "感激の念に堪えません (kangeki no nen ni taemasen)",
                    "感動しています (kandou shite imasu)",
                    "感情が高まっています (kanjou ga takamatte imasu)"
                ],
                correct: 1,
                explanation: "感激の念に堪えません (kangeki no nen ni taemasen) is the most formal way to express overwhelming emotion."
            },
            {
                question: "What is the proper way to say 'I offer my deepest respect'?",
                options: [
                    "尊敬します (sonkei shimasu)",
                    "深く尊敬の念を抱いております (fukaku sonkei no nen wo idaite orimasu)",
                    "尊敬の念を持っています (sonkei no nen wo motte imasu)",
                    "尊敬いたします (sonkei itashimasu)"
                ],
                correct: 1,
                explanation: "深く尊敬の念を抱いております (fukaku sonkei no nen wo idaite orimasu) is the most formal way to express respect."
            }
        ]
    }
};

let currentCategory = null;
let currentQuestion = 0;
let score = 0;
let answered = false;
let selectedQuestions = []; // Array to store randomly selected questions

// Function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to get random questions for a category
function getRandomQuestions(categoryKey, count = 5) {
    const category = questionBank[categoryKey];
    const shuffledQuestions = shuffleArray([...category.questions]);
    return shuffledQuestions.slice(0, count);
}

// Initialize the quiz
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedQuestions = [];
    showCategorySelection();
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('category-screen').classList.add('active');
}

// Show category selection
function showCategorySelection() {
    const categoryContainer = document.getElementById('category-options');
    categoryContainer.innerHTML = '';

    Object.keys(questionBank).forEach(categoryKey => {
        const category = questionBank[categoryKey];
        const button = document.createElement('div');
        button.className = 'category-option';
        button.innerHTML = `
            <h3>${category.name}</h3>
            <p>${category.description}</p>
        `;
        button.onclick = () => selectCategory(categoryKey);
        categoryContainer.appendChild(button);
    });
}

// Select category and start quiz
function selectCategory(categoryKey) {
    currentCategory = categoryKey;
    // Get 10 random questions for this category
    selectedQuestions = getRandomQuestions(categoryKey, 10);
    showQuestion();
    document.getElementById('category-screen').classList.remove('active');
    document.getElementById('quiz-screen').classList.add('active');
}

// Display current question
function showQuestion() {
    const question = selectedQuestions[currentQuestion];

    document.getElementById('question').textContent = question.question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectOption(index);
        optionsContainer.appendChild(button);
    });

    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('score').textContent = `Question ${currentQuestion + 1} of ${selectedQuestions.length}`;

    // Update progress bar
    const progress = ((currentQuestion + 1) / selectedQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';

    answered = false;
}

// Handle option selection
function selectOption(selectedIndex) {
    if (answered) return;

    answered = true;
    const question = selectedQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');

    options.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && selectedIndex !== question.correct) {
            option.classList.add('incorrect');
        }
    });

    if (selectedIndex === question.correct) {
        score++;
    }

    document.getElementById('next-btn').style.display = 'inline-block';
}

// Move to next question
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < selectedQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Display final results
function showResults() {
    document.getElementById('quiz-screen').classList.remove('active');
    document.getElementById('result-screen').classList.add('active');

    const category = questionBank[currentCategory];
    const percentage = Math.round((score / selectedQuestions.length) * 100);
    document.getElementById('final-score').textContent = `Your Score: ${score}/${selectedQuestions.length} (${percentage}%)`;

    let message = '';
    if (percentage >= 90) {
        message = `Excellent! You have mastered ${category.name}! 素晴らしい！${category.name}を完璧に理解しています！`;
    } else if (percentage >= 70) {
        message = `Good job! You have a solid understanding of ${category.name}. よくできました！${category.name}の理解がしっかりしています！`;
    } else if (percentage >= 50) {
        message = `Not bad! Keep practicing ${category.name}. 悪くないです！${category.name}の練習を続けてください！`;
    } else {
        message = `Keep studying! ${category.name} takes time to master. 勉強を続けてください！${category.name}は時間がかかります！`;
    }

    document.getElementById('result-message').textContent = message;
}

// Restart the quiz
function restartQuiz() {
    document.getElementById('result-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
}

// Go back to previous screen
function goBack() {
    // Hide all screens
    document.querySelectorAll('.quiz-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show appropriate screen based on current state
    if (currentCategory && currentQuestion > 0) {
        // If we're in the middle of a quiz, go back to category selection
        document.getElementById('category-screen').classList.add('active');
        currentQuestion = 0;
        score = 0;
        currentCategory = null;
        selectedQuestions = [];
    } else if (currentCategory) {
        // If we're at the start of a quiz, go back to category selection
        document.getElementById('category-screen').classList.add('active');
        currentCategory = null;
        selectedQuestions = [];
    } else {
        // Go back to start screen
        document.getElementById('start-screen').classList.add('active');
    }
}

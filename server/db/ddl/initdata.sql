
INSERT INTO UserAccount (
    id,
    displayName,
    userId,
    pw,
    deleteFlag,
    creation,
    modification,
    version
) VALUES (
    NEXTVAL('UserAccountSeq'),
    'テストユーザ',
    'test',
    'pass',
    FALSE,
    NOW(),
    NOW(),
    0
);

INSERT INTO UserAccount (
    id,
    displayName,
    userId,
    pw,
    deleteFlag,
    creation,
    modification,
    version
) VALUES (
    NEXTVAL('UserAccountSeq'),
    'テストユーザ2',
    'test2',
    'pass',
    FALSE,
    NOW(),
    NOW(),
    0
);

-- SampleProduct
INSERT INTO SampleProduct (id, code, name, category, quantity, creation, modification, version)
VALUES
  (1, 'B08LL9VF1T', 'ダイソン V11 スティックバキューム', '掃除機', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (2, 'B086KJ6X4G', 'シャープ 加湿空気清浄機', '空気清浄機', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (3, 'B082VF7Y1N', 'パナソニック オーブンレンジ', '電子レンジ・オーブン', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (4, 'B081TPTP4M', 'ブラウン シリーズ9 電気シェーバー', 'シェーバー', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (5, 'B0863TXGM3', 'ソニー ノイズキャンセリングヘッドホン', 'ヘッドホン', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (6, 'B07WXL5YPW', '任天堂 Switch', 'ゲーム機', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (7, 'B0756CYWWD', 'インスタントポット デュオプラス', '電気圧力鍋', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (8, 'B00IS8WZHS', 'ケンウッド スタンドミキサー', 'ミキサー', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (9, 'B00KPTO6LO', '象印 炊飯器', '炊飯器', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (10, 'B08VY2QPVY', 'ティファール スチームアイロン', 'アイロン', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (11, 'B07T1X9TJZ', 'ボッシュ 電動ドリル', '電動工具', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (12, 'B07QKGF17S', 'ルンバ ロボット掃除機', 'ロボット掃除機', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (13, 'B07P3ZRXCT', 'キヤノン インクジェットプリンター', 'プリンター', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (14, 'B08HJG1Q7C', 'リコー デジタルカメラ', 'デジタルカメラ', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (15, 'B083NRPZZK', 'アップル iPhone 12', 'スマートフォン', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (16, 'B081JWZQJB', 'ボーズ スピーカー', 'ワイヤレススピーカー', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (17, 'B08LZB1G7K', 'アマゾンエコー 4世代', 'スマートスピーカー', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (18, 'B08R6ZTJ13', 'サムスン ギャラクシータブ S7', 'タブレット', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (19, 'B08621N4C9', 'ソニー ブラビア 65インチ 4Kテレビ', 'テレビ', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0),
  (20, 'B088MKF848', 'ネスプレッソ エッセンサ ミニ', 'エスプレッソマシン', TRUNC(1 + RANDOM() * (100 - 1)), NOW(), NOW(), 0);

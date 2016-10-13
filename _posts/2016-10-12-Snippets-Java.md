---
layout: post
title: "Some Snippets in Java"
date: 2016-10-12
---

```java
// ask for input
public static String askForKey() throws UnsupportedEncodingException {
    Scanner typeIn = new Scanner(System.in);
    System.out.print("Enter the key: ");
    String key = typeIn.next();
    return Key;
}

static boolean okayToOverwrite(Path file) {
    String answer = System.console().readLine("overwrite %s (yes/no)? ", file);
    return (answer.equalsIgnoreCase("y") || answer.equalsIgnoreCase("yes"));
}
```

```java
// encode
public static String encode (String input, Key keyX) throws NoSuchPaddingException, NoSuchAlgorithmException, BadPaddingException, IllegalBlockSizeException, InvalidKeyException, UnsupportedEncodingException {
    Key aesKey = keyX;
    Cipher cipher = Cipher.getInstance("AES");
    cipher.init(Cipher.ENCRYPT_MODE, aesKey);

    byte[] encrypted = cipher.doFinal(input.getBytes("UTF-8"));
    Base64.Encoder encoder = Base64.getEncoder();
    String encryptedString = encoder.encodeToString(encrypted);
    return encryptedString;
}

// decode
public static String decode(String input, Key keyX) throws NoSuchPaddingException, NoSuchAlgorithmException, InvalidKeyException, BadPaddingException, IllegalBlockSizeException, UnsupportedEncodingException {
    Key aesKey = keyX;
    Cipher cipher = Cipher.getInstance("AES");

    Base64.Decoder decoder = Base64.getDecoder();
    cipher.init(Cipher.DECRYPT_MODE, aesKey);
    String decrypted = new String(cipher.doFinal(decoder.decode(input)), "UTF-8");
    return decrypted;
}
```

```java
// write to csv file
public static File recordGPS = new File(filePathGPS)
public static void writeToCsv(String prefix, String[] text) throws IOException {
    Date timestamp = new Date();

    CSVWriter writer;
    // File exist
    if(recordGPS.exists() && !recordGPS.isDirectory()){
        FileWriter subjectIdList = new FileWriter(filePathGPS, true);
        writer = new CSVWriter(subjectIdList);
    }
    else {
        writer = new CSVWriter(new FileWriter(filePathGPS));
    }
    // convert string array to arrayList, adding timestamp and prefix
    List<String> data = new ArrayList<String>();
    data.add(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(timestamp));
    data.add(prefix);
    for (String element : text) {
        data.add(element);
    }
    writer.writeNext(data.toArray(new String[0]));
    writer.close();
}
```



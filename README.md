# 🕥 Recalli App

**Recalli** é um app que te ajuda a lembrar dos seus compromissos e tarefas diárias!  
Este projeto foi desenvolvido como solução para o **segundo desafio mobile do NADIC**, utilizando notificações push e deep linking.

---

## ✨ Funcionalidades

- ✅ Criação de tarefas com data e horário definidos
- 🔔 Lembretes via **push notifications**
- 💾 Armazenamento local das tarefas
- 🔗 Suporte a **deep linking** com expo-router para abrir tarefas diretamente
- 📦 Zustand para estados globais e armazenamento das notificações recebidas

---

## 🚀 Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) com [Zustand](https://zustand-demo.pmnd.rs/)
- [Deep Linking](https://reactnavigation.org/docs/deep-linking/)
- [react-native-calendars](https://github.com/wix/react-native-calendars)

---

## 📱 Preview

### Tela home sem tasks
![Imagem do WhatsApp de 2025-07-02 à(s) 21 26 29_d5226374](https://github.com/user-attachments/assets/6ce68ec4-3d57-4c6b-8518-cc7908e956fe)

### Tela home com tasks
![Imagem do WhatsApp de 2025-07-02 à(s) 21 26 11_4494094b](https://github.com/user-attachments/assets/0623a319-4222-4c1d-9832-0310c72f1744)

### Tela de criar tasks
![Imagem do WhatsApp de 2025-07-02 à(s) 21 26 45_f8c07f5d](https://github.com/user-attachments/assets/f67ffcb6-7232-4197-a605-a3e21cac9423)

### Tela de notificações recebeidas vazia
![Imagem do WhatsApp de 2025-07-02 à(s) 21 27 01_cc01df95](https://github.com/user-attachments/assets/4c9960cc-e341-4b16-ad75-d625d73374ac)

### Tela de notificações
![Imagem do WhatsApp de 2025-07-02 à(s) 21 26 11_94b2b7f4](https://github.com/user-attachments/assets/01050fb2-c22f-4f7a-abbf-a895bc2d5c9f)

### As notificações do app
![Imagem do WhatsApp de 2025-07-02 à(s) 21 53 45_2f995f92](https://github.com/user-attachments/assets/5d6b62c1-d56b-4e18-89c7-bbfe5ac8c715)


---

## 📂 Estrutura básica

```bash
📁 src
 ┣ 📂 @types
 ┣ 📂 app
 ┣ 📂 components
    ┣ 📂 Atoms
    ┣ 📂 Molecules
    ┣ 📂 Screens
 ┣ 📂 constants
 ┣ 📂 services
 ┣ 📂 utils


# Instale as dependências
npm install

# Inicie o projeto com o Expo
npx expo run:android

```

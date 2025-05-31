# نظام الاستشارات النفسية عبر الإنترنت

![صورة النظام](assets/logo.png)

منصة متكاملة للاستشارات النفسية عن بعد تتيح التواصل بين المرضى والأطباء النفسيين عبر جلسات الفيديو والدردشة النصية.

## المميزات الرئيسية

- جلسات فيديو مباشرة باستخدام WebRTC
- نظام دردشة نصية في الوقت الحقيقي
- إدارة المواعيد وحجز الجلسات
- الاختبارات النفسية المعتمدة
- إدارة المحتوى التعليمي
- مجموعات الدعم النفسي

## التقنيات المستخدمة

### Backend
- Django REST Framework
- Django Channels (WebSockets)
- PostgreSQL
- WebRTC

### Frontend
- React.js
- Axios
- Material-UI

## كيفية التشغيل

1. استنساخ المستودع:
```bash
git clone https://github.com/yourusername/psychotherapy-system.git
cd psychotherapy-system
```

2. تهيئة البيئة الافتراضية وتثبيت المتطلبات:
```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate  # Windows
pip install -r requirements.txt
```

3. تشغيل الخادم:
```bash
python manage.py runserver
```

## لقطات الشاشة

![نظام الدردشة](assets/chat-screenshot.png)
![جلسات الفيديو](assets/video-screenshot.png)

## المساهمة

المساهمات مرحب بها! يرجى فتح issue لمناقشة التغييرات التي تريد إجراؤها أو إرسال pull request.

## الرخصة

هذا المشروع مرخص تحت [رخصة MIT](LICENSE).

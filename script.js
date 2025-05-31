// محاكاة نظام الدردشة
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    
    // رسائل أولية لمحاكاة الدردشة
    const initialMessages = [
        {
            sender: 'الدكتور أحمد',
            content: 'مرحباً بك في جلسة الدعم النفسي، كيف يمكنني مساعدتك اليوم؟',
            timestamp: '10:00 ص',
            type: 'received'
        },
        {
            sender: 'أنت',
            content: 'شكراً دكتور، أنا بحاجة لاستشارة بخصوص اضطراب النوم',
            timestamp: '10:02 ص',
            type: 'sent'
        },
        {
            sender: 'الدكتور أحمد',
            content: 'أفهم ذلك. هل يمكنك أن تخبرني المزيد عن مشكلة النوم التي تعاني منها؟',
            timestamp: '10:03 ص',
            type: 'received'
        }
    ];
    
    // عرض الرسائل الأولية
    initialMessages.forEach(message => {
        addMessageToChat(message);
    });
    
    // إرسال رسالة جديدة
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const newMessage = {
                sender: 'أنت',
                content: messageText,
                timestamp: getCurrentTime(),
                type: 'sent'
            };
            
            addMessageToChat(newMessage);
            messageInput.value = '';
            
            // محاكاة رد الطبيب بعد ثانيتين
            setTimeout(() => {
                const doctorReply = {
                    sender: 'الدكتور أحمد',
                    content: getRandomResponse(),
                    timestamp: getCurrentTime(),
                    type: 'received'
                };
                addMessageToChat(doctorReply);
            }, 2000);
        }
    }
    
    // إضافة رسالة إلى الدردشة
    function addMessageToChat(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', message.type);
        
        const senderElement = document.createElement('div');
        senderElement.classList.add('message-sender');
        senderElement.textContent = message.sender;
        
        const contentElement = document.createElement('div');
        contentElement.classList.add('message-content');
        contentElement.textContent = message.content;
        
        const timeElement = document.createElement('div');
        timeElement.classList.add('message-time');
        timeElement.textContent = message.timestamp;
        
        messageElement.appendChild(senderElement);
        messageElement.appendChild(contentElement);
        messageElement.appendChild(timeElement);
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // الحصول على الوقت الحالي
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'م' : 'ص';
        hours = hours % 12;
        hours = hours ? hours : 12; // الساعة 0 تصبح 12
        return `${hours}:${minutes} ${ampm}`;
    }
    
    // ردود عشوائية لمحاكاة الطبيب
    function getRandomResponse() {
        const responses = [
            "أفهم ما تعانيه، هل يمكنك التفصيل أكثر؟",
            "هذه مشكلة شائعة ولدي بعض النصائح لك",
            "كم مرة تحدث هذه المشكلة أسبوعياً؟",
            "هل جربت أي حلول لهذه المشكلة من قبل؟",
            "سأقدم لك بعض التمارين التي قد تساعدك",
            "لدي اقتراح قد يفيدك في هذه الحالة"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // أحداث المستخدم
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // تأثيرات التمرير السلس
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

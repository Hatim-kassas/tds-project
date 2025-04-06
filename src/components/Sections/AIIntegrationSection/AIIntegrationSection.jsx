import React from 'react';
import './AIIntegrationSection.css';

export default function AIIntegrationSection() {
    return (
        <div className="integration-section" id="ai">
            <h1>Integrate Your System with AI</h1>
            <p>Just choose one, and we'll handle the rest for you.</p>
            <div className="ai-list">
                <div className="ai-item">
                    <img src="/images/ai/chatgpt-logo.png" alt="ChatGPT Logo" />
                    <span>ChatGPT</span>
                </div>
                <div className="ai-item">
                    <img src="/images/ai/copilot-logo.png" alt="Copilot Logo" />
                    <span>Copilot</span>
                </div>
                <div className="ai-item">
                    <img src="/images/ai/claude-logo.png" alt="Claude Logo" />
                    <span>Claude</span>
                </div>
                <div className="ai-item">
                    <img src="/images/ai/gemini-logo.png" alt="Gemini Logo" />
                    <span>Gemini</span>
                </div>
                <div className="ai-item">
                    <img src="/images/ai/deepseek-logo.png" alt="DeepSeek Logo" />
                    <span>DeepSeek</span>
                </div>
            </div>
        </div>
    );
}
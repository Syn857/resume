import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Settings,
  X,
  Monitor,
  Moon,
  Sun,
  Palette,
  Volume2,
  VolumeX,
  Zap,
  Shield,
  Globe,
  Bell,
  User,
  Lock,
  Database,
  Wifi,
  Smartphone,
  Laptop,
  Save,
  RotateCcw,
  Download,
  Upload,
  Trash2,
  Eye,
  EyeOff,
  Key,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Activity,
  BarChart3,
  Sliders,
  Cpu,
  HardDrive,
  Wifi as WifiIcon,
  Battery,
  Thermometer,
  AlertTriangle,
  CheckCircle,
  Info,
  RefreshCw
} from 'lucide-react';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UserSettings {
  theme: 'dark' | 'light' | 'auto';
  accentColor: string;
  soundEnabled: boolean;
  animationsEnabled: boolean;
  reducedMotion: boolean;
  language: string;
  timezone: string;
  notifications: {
    email: boolean;
    push: boolean;
    desktop: boolean;
    marketing: boolean;
  };
  privacy: {
    profileVisible: boolean;
    activityTracking: boolean;
    dataCollection: boolean;
    analytics: boolean;
  };
  performance: {
    autoSave: boolean;
    preloadImages: boolean;
    enableGPU: boolean;
    maxFPS: number;
    qualityLevel: 'low' | 'medium' | 'high' | 'ultra';
  };
  security: {
    twoFactorAuth: boolean;
    sessionTimeout: number;
    loginNotifications: boolean;
    deviceTracking: boolean;
  };
}

interface SystemInfo {
  cpu: { usage: number; temperature: number };
  memory: { used: number; total: number };
  storage: { used: number; total: number };
  network: { status: 'connected' | 'disconnected'; speed: number };
  battery: { level: number; charging: boolean };
  performance: { fps: number; renderTime: number };
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('appearance');
  const [settings, setSettings] = useState<UserSettings>({
    theme: 'dark',
    accentColor: '#8b5cf6',
    soundEnabled: true,
    animationsEnabled: true,
    reducedMotion: false,
    language: 'en',
    timezone: 'UTC',
    notifications: {
      email: true,
      push: true,
      desktop: false,
      marketing: false
    },
    privacy: {
      profileVisible: true,
      activityTracking: true,
      dataCollection: false,
      analytics: true
    },
    performance: {
      autoSave: true,
      preloadImages: true,
      enableGPU: true,
      maxFPS: 60,
      qualityLevel: 'high'
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: 30,
      loginNotifications: true,
      deviceTracking: true
    }
  });

  const [systemInfo, setSystemInfo] = useState<SystemInfo>({
    cpu: { usage: 45, temperature: 65 },
    memory: { used: 8.2, total: 16 },
    storage: { used: 256, total: 512 },
    network: { status: 'connected', speed: 150 },
    battery: { level: 85, charging: false },
    performance: { fps: 60, renderTime: 16.7 }
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const accentColors = [
    { name: 'Purple', value: '#8b5cf6' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Green', value: '#10b981' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Indigo', value: '#6366f1' }
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'ru', name: 'Русский' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'zh', name: '中文' }
  ];

  const timezones = [
    'UTC',
    'America/New_York',
    'America/Los_Angeles',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Australia/Sydney'
  ];

  const tabs = [
    { id: 'appearance', label: 'Appearance', icon: Palette },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'performance', label: 'Performance', icon: Zap },
    { id: 'security', label: 'Security', icon: Lock },
    { id: 'system', label: 'System', icon: Monitor }
  ];

  // Simulate system monitoring
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemInfo(prev => ({
        ...prev,
        cpu: {
          usage: Math.max(20, Math.min(80, prev.cpu.usage + (Math.random() - 0.5) * 10)),
          temperature: Math.max(50, Math.min(85, prev.cpu.temperature + (Math.random() - 0.5) * 5))
        },
        memory: {
          ...prev.memory,
          used: Math.max(4, Math.min(14, prev.memory.used + (Math.random() - 0.5) * 0.5))
        },
        performance: {
          fps: Math.max(30, Math.min(120, prev.performance.fps + (Math.random() - 0.5) * 5)),
          renderTime: Math.max(8, Math.min(33, prev.performance.renderTime + (Math.random() - 0.5) * 2))
        }
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const updateSetting = (path: string, value: any) => {
    const keys = path.split('.');
    setSettings(prev => {
      const newSettings = { ...prev };
      let current: any = newSettings;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current[keys[i]] = { ...current[keys[i]] };
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newSettings;
    });
    setHasUnsavedChanges(true);
  };

  const saveSettings = () => {
    // Save to localStorage or API
    localStorage.setItem('userSettings', JSON.stringify(settings));
    setHasUnsavedChanges(false);
    
    // Apply theme changes
    document.documentElement.style.setProperty('--accent-color', settings.accentColor);
    document.documentElement.className = settings.theme;
  };

  const resetSettings = () => {
    setSettings({
      theme: 'dark',
      accentColor: '#8b5cf6',
      soundEnabled: true,
      animationsEnabled: true,
      reducedMotion: false,
      language: 'en',
      timezone: 'UTC',
      notifications: {
        email: true,
        push: true,
        desktop: false,
        marketing: false
      },
      privacy: {
        profileVisible: true,
        activityTracking: true,
        dataCollection: false,
        analytics: true
      },
      performance: {
        autoSave: true,
        preloadImages: true,
        enableGPU: true,
        maxFPS: 60,
        qualityLevel: 'high'
      },
      security: {
        twoFactorAuth: false,
        sessionTimeout: 30,
        loginNotifications: true,
        deviceTracking: true
      }
    });
    setHasUnsavedChanges(true);
    setShowResetConfirm(false);
  };

  const exportSettings = () => {
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'portfolio-settings.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importSettings = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedSettings = JSON.parse(e.target?.result as string);
          setSettings(importedSettings);
          setHasUnsavedChanges(true);
        } catch (error) {
          console.error('Failed to import settings:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const getPerformanceColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400';
  };

  const renderAppearanceTab = () => (
    <div className="space-y-6">
      {/* Theme Selection */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Theme</h3>
        <div className="grid grid-cols-3 gap-3">
          {[
            { value: 'light', label: 'Light', icon: Sun },
            { value: 'dark', label: 'Dark', icon: Moon },
            { value: 'auto', label: 'Auto', icon: Monitor }
          ].map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => updateSetting('theme', value)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                settings.theme === value
                  ? 'border-purple-500 bg-purple-500/20'
                  : 'border-gray-600 bg-gray-700/30 hover:border-gray-500'
              }`}
            >
              <Icon className="w-6 h-6 mx-auto mb-2 text-white" />
              <div className="text-white text-sm">{label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Accent Color */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Accent Color</h3>
        <div className="grid grid-cols-4 gap-3">
          {accentColors.map((color) => (
            <button
              key={color.value}
              onClick={() => updateSetting('accentColor', color.value)}
              className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                settings.accentColor === color.value
                  ? 'border-white scale-110'
                  : 'border-gray-600 hover:border-gray-500'
              }`}
              style={{ backgroundColor: color.value }}
            >
              <div className="w-full h-8 rounded" />
              <div className="text-white text-xs mt-2">{color.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Animation Settings */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Animations</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium">Enable Animations</div>
              <div className="text-gray-400 text-sm">Turn off to improve performance</div>
            </div>
            <button
              onClick={() => updateSetting('animationsEnabled', !settings.animationsEnabled)}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                settings.animationsEnabled ? 'bg-purple-600' : 'bg-gray-600'
              }`}
            >
              <motion.div
                className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"
                animate={{ x: settings.animationsEnabled ? 26 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium">Reduced Motion</div>
              <div className="text-gray-400 text-sm">Minimize motion for accessibility</div>
            </div>
            <button
              onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                settings.reducedMotion ? 'bg-purple-600' : 'bg-gray-600'
              }`}
            >
              <motion.div
                className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"
                animate={{ x: settings.reducedMotion ? 26 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium">Sound Effects</div>
              <div className="text-gray-400 text-sm">Play sounds for interactions</div>
            </div>
            <button
              onClick={() => updateSetting('soundEnabled', !settings.soundEnabled)}
              className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                settings.soundEnabled ? 'bg-purple-600' : 'bg-gray-600'
              }`}
            >
              <motion.div
                className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"
                animate={{ x: settings.soundEnabled ? 26 : 2 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Language & Region */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Language & Region</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
            <select
              value={settings.language}
              onChange={(e) => updateSetting('language', e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Timezone</label>
            <select
              value={settings.timezone}
              onChange={(e) => updateSetting('timezone', e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {timezones.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {[
            { key: 'email', label: 'Email Notifications', description: 'Receive notifications via email', icon: Mail },
            { key: 'push', label: 'Push Notifications', description: 'Browser push notifications', icon: Bell },
            { key: 'desktop', label: 'Desktop Notifications', description: 'System desktop notifications', icon: Monitor },
            { key: 'marketing', label: 'Marketing Emails', description: 'Promotional and marketing content', icon: Globe }
          ].map(({ key, label, description, icon: Icon }) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-white font-medium">{label}</div>
                  <div className="text-gray-400 text-sm">{description}</div>
                </div>
              </div>
              <button
                onClick={() => updateSetting(`notifications.${key}`, !settings.notifications[key as keyof typeof settings.notifications])}
                className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                  settings.notifications[key as keyof typeof settings.notifications] ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"
                  animate={{ x: settings.notifications[key as keyof typeof settings.notifications] ? 26 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPrivacyTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Privacy Settings</h3>
        <div className="space-y-4">
          {[
            { key: 'profileVisible', label: 'Public Profile', description: 'Make your profile visible to others', icon: User },
            { key: 'activityTracking', label: 'Activity Tracking', description: 'Track your activity for analytics', icon: Activity },
            { key: 'dataCollection', label: 'Data Collection', description: 'Allow collection of usage data', icon: Database },
            { key: 'analytics', label: 'Analytics', description: 'Help improve the service with analytics', icon: BarChart3 }
          ].map(({ key, label, description, icon: Icon }) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-white font-medium">{label}</div>
                  <div className="text-gray-400 text-sm">{description}</div>
                </div>
              </div>
              <button
                onClick={() => updateSetting(`privacy.${key}`, !settings.privacy[key as keyof typeof settings.privacy])}
                className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                  settings.privacy[key as keyof typeof settings.privacy] ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"
                  animate={{ x: settings.privacy[key as keyof typeof settings.privacy] ? 26 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPerformanceTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Performance Settings</h3>
        <div className="space-y-4">
          {[
            { key: 'autoSave', label: 'Auto Save', description: 'Automatically save your work', icon: Save },
            { key: 'preloadImages', label: 'Preload Images', description: 'Load images in advance for better performance', icon: Download },
            { key: 'enableGPU', label: 'GPU Acceleration', description: 'Use GPU for better rendering performance', icon: Cpu }
          ].map(({ key, label, description, icon: Icon }) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-white font-medium">{label}</div>
                  <div className="text-gray-400 text-sm">{description}</div>
                </div>
              </div>
              <button
                onClick={() => updateSetting(`performance.${key}`, !settings.performance[key as keyof typeof settings.performance])}
                className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                  settings.performance[key as keyof typeof settings.performance] ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"
                  animate={{ x: settings.performance[key as keyof typeof settings.performance] ? 26 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Quality Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Graphics Quality</label>
            <select
              value={settings.performance.qualityLevel}
              onChange={(e) => updateSetting('performance.qualityLevel', e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="ultra">Ultra</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Max FPS: {settings.performance.maxFPS}
            </label>
            <input
              type="range"
              min="30"
              max="120"
              step="10"
              value={settings.performance.maxFPS}
              onChange={(e) => updateSetting('performance.maxFPS', parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Security Settings</h3>
        <div className="space-y-4">
          {[
            { key: 'twoFactorAuth', label: 'Two-Factor Authentication', description: 'Add an extra layer of security', icon: Shield },
            { key: 'loginNotifications', label: 'Login Notifications', description: 'Get notified of new logins', icon: Bell },
            { key: 'deviceTracking', label: 'Device Tracking', description: 'Track devices that access your account', icon: Smartphone }
          ].map(({ key, label, description, icon: Icon }) => (
            <div key={key} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-gray-400" />
                <div>
                  <div className="text-white font-medium">{label}</div>
                  <div className="text-gray-400 text-sm">{description}</div>
                </div>
              </div>
              <button
                onClick={() => updateSetting(`security.${key}`, !settings.security[key as keyof typeof settings.security])}
                className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                  settings.security[key as keyof typeof settings.security] ? 'bg-purple-600' : 'bg-gray-600'
                }`}
              >
                <motion.div
                  className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"
                  animate={{ x: settings.security[key as keyof typeof settings.security] ? 26 : 2 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Session Timeout: {settings.security.sessionTimeout} minutes
        </label>
        <input
          type="range"
          min="5"
          max="120"
          step="5"
          value={settings.security.sessionTimeout}
          onChange={(e) => updateSetting('security.sessionTimeout', parseInt(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );

  const renderSystemTab = () => (
    <div className="space-y-6">
      {/* System Performance */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">System Performance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">CPU Usage</span>
              </div>
              <span className={`text-sm ${getPerformanceColor(systemInfo.cpu.usage, { good: 50, warning: 75 })}`}>
                {systemInfo.cpu.usage.toFixed(1)}%
              </span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${systemInfo.cpu.usage}%` }}
              />
            </div>
          </div>

          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Memory</span>
              </div>
              <span className="text-sm text-white">
                {systemInfo.memory.used.toFixed(1)} / {systemInfo.memory.total} GB
              </span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(systemInfo.memory.used / systemInfo.memory.total) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-orange-400" />
                <span className="text-white font-medium">CPU Temp</span>
              </div>
              <span className={`text-sm ${getPerformanceColor(systemInfo.cpu.temperature, { good: 70, warning: 80 })}`}>
                {systemInfo.cpu.temperature.toFixed(1)}°C
              </span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(systemInfo.cpu.temperature / 100) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">FPS</span>
              </div>
              <span className={`text-sm ${getPerformanceColor(120 - systemInfo.performance.fps, { good: 30, warning: 60 })}`}>
                {systemInfo.performance.fps.toFixed(0)}
              </span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div
                className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(systemInfo.performance.fps / 120) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Storage Info */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Storage</h3>
        <div className="bg-gray-700/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">Local Storage</span>
            <span className="text-sm text-white">
              {formatBytes(systemInfo.storage.used * 1024 * 1024 * 1024)} / {formatBytes(systemInfo.storage.total * 1024 * 1024 * 1024)}
            </span>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-2">
            <div
              className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(systemInfo.storage.used / systemInfo.storage.total) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Network Status */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Network</h3>
        <div className="bg-gray-700/30 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <WifiIcon className={`w-5 h-5 ${
                systemInfo.network.status === 'connected' ? 'text-green-400' : 'text-red-400'
              }`} />
              <span className="text-white font-medium">
                {systemInfo.network.status === 'connected' ? 'Connected' : 'Disconnected'}
              </span>
            </div>
            {systemInfo.network.status === 'connected' && (
              <span className="text-sm text-white">
                {systemInfo.network.speed} Mbps
              </span>
            )}
          </div>
        </div>
      </div>

      {/* System Actions */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">System Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
            <RefreshCw className="w-5 h-5 text-blue-400" />
            <div className="text-left">
              <div className="text-white font-medium">Clear Cache</div>
              <div className="text-gray-400 text-sm">Clear application cache</div>
            </div>
          </button>

          <button className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
            <Download className="w-5 h-5 text-green-400" />
            <div className="text-left">
              <div className="text-white font-medium">Update Check</div>
              <div className="text-gray-400 text-sm">Check for updates</div>
            </div>
          </button>

          <button className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
            <Trash2 className="w-5 h-5 text-red-400" />
            <div className="text-left">
              <div className="text-white font-medium">Reset Data</div>
              <div className="text-gray-400 text-sm">Reset all application data</div>
            </div>
          </button>

          <button className="flex items-center gap-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
            <Activity className="w-5 h-5 text-purple-400" />
            <div className="text-left">
              <div className="text-white font-medium">Performance Test</div>
              <div className="text-gray-400 text-sm">Run performance benchmark</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700 w-full max-w-6xl max-h-[90vh] overflow-hidden"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <Settings className="w-6 h-6 text-purple-400" />
            <h2 className="text-xl font-bold text-white">Settings</h2>
            {hasUnsavedChanges && (
              <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs">
                Unsaved changes
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={exportSettings}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              title="Export Settings"
            >
              <Download className="w-5 h-5" />
            </button>
            
            <label className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors cursor-pointer" title="Import Settings">
              <Upload className="w-5 h-5" />
              <input
                type="file"
                accept=".json"
                onChange={importSettings}
                className="hidden"
              />
            </label>
            
            <button
              onClick={() => setShowResetConfirm(true)}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
              title="Reset Settings"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex h-[calc(90vh-120px)]">
          {/* Sidebar */}
          <div className="w-64 bg-gray-800/50 border-r border-gray-700 p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'appearance' && renderAppearanceTab()}
                {activeTab === 'notifications' && renderNotificationsTab()}
                {activeTab === 'privacy' && renderPrivacyTab()}
                {activeTab === 'performance' && renderPerformanceTab()}
                {activeTab === 'security' && renderSecurityTab()}
                {activeTab === 'system' && renderSystemTab()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Footer */}
        {hasUnsavedChanges && (
          <div className="flex items-center justify-between p-6 border-t border-gray-700 bg-gray-800/30">
            <div className="flex items-center gap-2 text-yellow-400">
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm">You have unsaved changes</span>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  // Reset to last saved state
                  const savedSettings = localStorage.getItem('userSettings');
                  if (savedSettings) {
                    setSettings(JSON.parse(savedSettings));
                  }
                  setHasUnsavedChanges(false);
                }}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Discard
              </button>
              
              <motion.button
                onClick={saveSettings}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Save className="w-4 h-4" />
                Save Changes
              </motion.button>
            </div>
          </div>
        )}

        {/* Reset Confirmation Modal */}
        <AnimatePresence>
          {showResetConfirm && (
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-800 rounded-xl border border-gray-700 p-6 max-w-md"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-lg font-semibold text-white">Reset Settings</h3>
                </div>
                
                <p className="text-gray-400 mb-6">
                  Are you sure you want to reset all settings to their default values? This action cannot be undone.
                </p>
                
                <div className="flex items-center gap-3 justify-end">
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  
                  <button
                    onClick={resetSettings}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default SettingsPanel;
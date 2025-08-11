import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, 
  X, 
  Moon, 
  Sun, 
  Palette, 
  Volume2, 
  VolumeX,
  Zap,
  Eye,
  Cpu
} from 'lucide-react';

interface ThemeSettings {
  darkMode: boolean;
  primaryColor: string;
  accentColor: string;
  animationSpeed: number;
  particleCount: number;
  soundEnabled: boolean;
  reducedMotion: boolean;
}

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState<ThemeSettings>({
    darkMode: true,
    primaryColor: '#8b5cf6',
    accentColor: '#06b6d4',
    animationSpeed: 1,
    particleCount: 2000,
    soundEnabled: true,
    reducedMotion: false
  });

  const colorPresets = [
    { name: 'Purple Cyan', primary: '#8b5cf6', accent: '#06b6d4' },
    { name: 'Blue Green', primary: '#3b82f6', accent: '#10b981' },
    { name: 'Pink Orange', primary: '#ec4899', accent: '#f59e0b' },
    { name: 'Red Purple', primary: '#ef4444', accent: '#a855f7' },
    { name: 'Emerald Teal', primary: '#059669', accent: '#0d9488' },
    { name: 'Indigo Rose', primary: '#6366f1', accent: '#f43f5e' }
  ];

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('portfolio_settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error loading settings:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Save settings to localStorage
    localStorage.setItem('portfolio_settings', JSON.stringify(settings));
    
    // Apply CSS custom properties
    document.documentElement.style.setProperty('--primary-color', settings.primaryColor);
    document.documentElement.style.setProperty('--accent-color', settings.accentColor);
    document.documentElement.style.setProperty('--animation-speed', settings.animationSpeed.toString());
    
    // Apply dark mode class
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Apply reduced motion
    if (settings.reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [settings]);

  const updateSetting = <K extends keyof ThemeSettings>(key: K, value: ThemeSettings[K]) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    const defaultSettings: ThemeSettings = {
      darkMode: true,
      primaryColor: '#8b5cf6',
      accentColor: '#06b6d4',
      animationSpeed: 1,
      particleCount: 2000,
      soundEnabled: true,
      reducedMotion: false
    };
    setSettings(defaultSettings);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Settings Panel */}
          <motion.div
            className="fixed right-0 top-0 h-full w-96 bg-slate-900/95 backdrop-blur-xl border-l border-white/20 z-50 overflow-y-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                    <Settings className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Settings</h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Theme Settings */}
              <div className="space-y-6">
                {/* Dark Mode Toggle */}
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {settings.darkMode ? <Moon className="h-5 w-5 text-purple-400" /> : <Sun className="h-5 w-5 text-yellow-400" />}
                      <span className="text-white font-medium">Dark Mode</span>
                    </div>
                    <button
                      onClick={() => updateSetting('darkMode', !settings.darkMode)}
                      className={`relative w-12 h-6 rounded-full transition-all duration-300 ${
                        settings.darkMode ? 'bg-gradient-to-r from-purple-600 to-cyan-600' : 'bg-gray-600'
                      }`}
                    >
                      <motion.div
                        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"
                        animate={{ x: settings.darkMode ? 26 : 2 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    </button>
                  </div>
                </div>

                {/* Color Presets */}
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <Palette className="h-5 w-5 text-purple-400" />
                    <span className="text-white font-medium">Color Theme</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {colorPresets.map((preset, index) => (
                      <motion.button
                        key={preset.name}
                        onClick={() => {
                          updateSetting('primaryColor', preset.primary);
                          updateSetting('accentColor', preset.accent);
                        }}
                        className={`p-3 rounded-lg border transition-all duration-200 ${
                          settings.primaryColor === preset.primary
                            ? 'border-white/40 bg-white/10'
                            : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center space-x-2 mb-2">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: preset.primary }}
                          />
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: preset.accent }}
                          />
                        </div>
                        <p className="text-xs text-gray-300">{preset.name}</p>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Animation Speed */}
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="h-5 w-5 text-cyan-400" />
                    <span className="text-white font-medium">Animation Speed</span>
                    <span className="text-sm text-gray-400">({settings.animationSpeed}x)</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2"
                    step="0.1"
                    value={settings.animationSpeed}
                    onChange={(e) => updateSetting('animationSpeed', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Slow</span>
                    <span>Fast</span>
                  </div>
                </div>

                {/* Particle Count */}
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <Cpu className="h-5 w-5 text-green-400" />
                    <span className="text-white font-medium">Particle Count</span>
                    <span className="text-sm text-gray-400">({settings.particleCount})</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="100"
                    value={settings.particleCount}
                    onChange={(e) => updateSetting('particleCount', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Low</span>
                    <span>High</span>
                  </div>
                </div>

                {/* Accessibility Settings */}
                <div className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10">
                  <h3 className="text-white font-medium mb-4 flex items-center space-x-2">
                    <Eye className="h-5 w-5 text-blue-400" />
                    <span>Accessibility</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {/* Reduced Motion */}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Reduce Motion</span>
                      <button
                        onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                        className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
                          settings.reducedMotion ? 'bg-gradient-to-r from-purple-600 to-cyan-600' : 'bg-gray-600'
                        }`}
                      >
                        <motion.div
                          className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-lg"
                          animate={{ x: settings.reducedMotion ? 20 : 2 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>
                    
                    {/* Sound Effects */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {settings.soundEnabled ? <Volume2 className="h-4 w-4 text-gray-400" /> : <VolumeX className="h-4 w-4 text-gray-400" />}
                        <span className="text-gray-300 text-sm">Sound Effects</span>
                      </div>
                      <button
                        onClick={() => updateSetting('soundEnabled', !settings.soundEnabled)}
                        className={`relative w-10 h-5 rounded-full transition-all duration-300 ${
                          settings.soundEnabled ? 'bg-gradient-to-r from-purple-600 to-cyan-600' : 'bg-gray-600'
                        }`}
                      >
                        <motion.div
                          className="absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-lg"
                          animate={{ x: settings.soundEnabled ? 20 : 2 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Reset Button */}
                <motion.button
                  onClick={resetSettings}
                  className="w-full py-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl text-white font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Reset to Defaults
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SettingsPanel;
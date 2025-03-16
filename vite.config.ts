import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // 파일 변경 감지를 강제
    },
    hmr: true, // Hot Module Replacement 활성화
    open: true, // 서버 실행 시 자동으로 브라우저 열기
  },
});

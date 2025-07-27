// app/_layout.tsx
import { Stack} from 'expo-router';

export default function RootLayout() {
    return (
        <Stack>
            {/* Здесь мы определяем все наши экраны.
        Мы начинаем с экрана логина, чтобы он загрузился первым.
      */}
            <Stack.Screen name="login" options={{ headerShown: false }} />

            {/* Затем идет главный экран.
        Мы ставим `headerShown: false`, чтобы не было стандартной шапки.
      */}
            <Stack.Screen name="index" options={{ headerShown: false }} />

        </Stack>
    );
}

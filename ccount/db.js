// Create a single supabase client for interacting with your database
const { createClient } = supabase
const _supabase = createClient('https://kkiwhwgrqbgxkpubymuy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtraXdod2dycWJneGtwdWJ5bXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0MzI1NjMsImV4cCI6MjA0NTAwODU2M30.3ZCZNXzamu3pwK0d8R21KOPw4Lv4cs8WY4CC-3AcDYo')

const createOrUpdateUserHighScore = async ({ username, high_score }) => {
    const scoreDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

    // Check if user already has a record for today
    const { data: existingRecord } = await _supabase
        .from('leaderboard')
        .select()
        .eq('username', username)
        .eq('score_date', scoreDate)
        .maybeSingle();

    if (existingRecord) {
        // Record for today exists: update it
        return _supabase
            .from('leaderboard')
            .update({ high_score, updated_at: new Date().toISOString() })
            .eq('username', username)
            .eq('score_date', scoreDate)
            .select();
    } else {
        // No record for today: create one
        return _supabase
            .from('leaderboard')
            .insert({ username, high_score, score_date: scoreDate })
            .select();
    }
}

const getLeaderboard = (top = 10) => {
    return _supabase.from('leaderboard').select().order('high_score', { ascending: false }).limit(top);
};

const getDailyLeaderboard = (top = 10) => {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999).toISOString();
    return _supabase
        .from('leaderboard')
        .select()
        .gte('updated_at', startOfDay)
        .lte('updated_at', endOfDay)
        .order('high_score', { ascending: false })
        .limit(top);
};

const getWeeklyLeaderboard = (top = 10) => {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - 7);
    const startStr = startOfWeek.toISOString();
    return _supabase
        .from('leaderboard')
        .select()
        .gte('updated_at', startStr)
        .order('high_score', { ascending: false })
        .limit(top);
};

const getMonthlyLeaderboard = (top = 10) => {
    const now = new Date();
    const startOfMonth = new Date(now);
    startOfMonth.setDate(now.getDate() - 30);
    const startStr = startOfMonth.toISOString();
    return _supabase
        .from('leaderboard')
        .select()
        .gte('updated_at', startStr)
        .order('high_score', { ascending: false })
        .limit(top);
};


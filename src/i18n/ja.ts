import { I18nTags } from '@/constant'

const oauth = {
  [I18nTags.oauth.form_brand]: 'Cuckoo Plus',
  [I18nTags.oauth.login_hint]: '連携ログイン',
  [I18nTags.oauth.server_input_label]: 'マストドンのURL',
  [I18nTags.oauth.please_input_server_url]: 'マストドンのURLを入力してください',
  [I18nTags.oauth.please_input_correct_server_url]: 'マストドンのURLを確認してください',
  [I18nTags.oauth.register_app_error_message]: '何かがおかしいです！ マストドンのURLを確認してください',
  [I18nTags.oauth.confirm_input]: '確認'
}

const common = {
  [I18nTags.common.status_visibility_public]: '公開',
  [I18nTags.common.status_visibility_unlisted]: '未収載',
  [I18nTags.common.status_visibility_private]: 'フォロワー限定',
  [I18nTags.common.status_visibility_direct]: 'ダイレクト',
  [I18nTags.common.status_visibility_public_desc]: '公開TLに投稿する',
  [I18nTags.common.status_visibility_unlisted_desc]: '公開TLで表示しない',
  [I18nTags.common.status_visibility_private_desc]: 'フォロワーだけに公開',
  [I18nTags.common.status_visibility_direct_desc]: 'メンションしたユーザーだけに公開',
}

const statusCard = {
  [I18nTags.statusCard.post_new_status_placeholder]: '今なにしてる？',
  [I18nTags.statusCard.reply_to_main_status]: 'コメントを追加してください...',
  [I18nTags.statusCard.reply_to_replier]: '返信',
  [I18nTags.statusCard.cancel_post]: 'キャンセル',
  [I18nTags.statusCard.submit_post]: '送信',
  [I18nTags.statusCard.show_content]: '開く',
  [I18nTags.statusCard.hide_content]: '閉じる',
  [I18nTags.statusCard.mute_status]: 'ミュート',
  [I18nTags.statusCard.delete_status]: '削除',
  [I18nTags.statusCard.delete_status_confirm]: 'この投稿を削除してもよろしいですか？',
  [I18nTags.statusCard.do_delete_status_btn]: '削除',
  [I18nTags.statusCard.cancel_delete_status_btn]: 'キャンセル',
  [I18nTags.statusCard.originally_shared_by]: '{displayName}<span class="at-name">@{atName}</span> さんから',
  [I18nTags.statusCard.sensitive_media_alert]: '隠されたメディア <br/> クリックで開きます'
}

const drawer = {
  [I18nTags.drawer.home]: 'ホーム',
  [I18nTags.drawer.public]: 'パブリック',
  [I18nTags.drawer.tag]: 'タグ',
  [I18nTags.drawer.profile]: 'プロフィール',
  [I18nTags.drawer.settings]: '設定',
  [I18nTags.drawer.logout]: 'ログアウト',
  [I18nTags.drawer.toHostInstance]: '現在のインスタンスを開く',
  [I18nTags.drawer.search_input_placeholder]: '検索',
  [I18nTags.drawer.search_result_people_label]: 'ユーザー',
  [I18nTags.drawer.search_result_hashtag_label]: 'ハッシュタグ'
}

const settings = {
  [I18nTags.settings.general_label]: '一般',
  [I18nTags.settings.choose_theme]: 'テーマ:',
  [I18nTags.settings.choose_language]: '言語:',
  [I18nTags.settings.use_multi_line_mode]: 'マルチカラムレイアウトを使う:',
  [I18nTags.settings.show_sensitive_media_files]: 'メディアを常に閲覧注意としてマークする:',
  [I18nTags.settings.auto_load_new_status]: '新しい投稿を常に自動的に読み込む:',
  [I18nTags.settings.stream_label]: 'ストリーム',
  [I18nTags.settings.media_label]: 'メディア',
  [I18nTags.settings.personality_label]: 'パーソナリティ'
}

const timeLines = {
  [I18nTags.timeLines.no_load_more_status_notice]: 'すべての投稿を見ました。',
  [I18nTags.timeLines.new_message_notice]: '新しい投稿 {count} | 新しい投稿 {count}'
}

const postStatusDialog = {
  [I18nTags.postStatusDialog.do_discard_message_confirm]: 'この投稿を破棄しますか？',
  [I18nTags.postStatusDialog.do_keep_message]: '保持',
  [I18nTags.postStatusDialog.do_discard_message]: '破棄',
  [I18nTags.postStatusDialog.text_character_limit_exceed]: '文字数が500を超えています。'
}

const notifications = {
  [I18nTags.notifications.someone_followed_you]: '{displayName} さんがあなたをフォローしています'
}

export default {
  ...oauth,
  ...common,
  ...statusCard,
  ...timeLines,
  ...drawer,
  ...settings,
  ...postStatusDialog,
  ...notifications
}

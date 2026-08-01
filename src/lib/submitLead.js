const SUPABASE_URL = 'https://oosyuzgdubnqkxorprxe.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_vzGDy53FFPfJ3IYb7h8O2Q_X9jsygf-'

/**
 * Posts a lead to the multi-tenant Supabase lead-capture Edge Function. This is
 * the only backend call this page makes — no other integration lives here.
 */
export async function submitLead(formData) {
  const response = await fetch(`${SUPABASE_URL}/functions/v1/submit-lead`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      client_slug: 'super-women-thyroid',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message || '',
      biggest_struggle: formData.biggest_struggle,
      struggle_duration: formData.struggle_duration,
      source: 'lp.myhealthnourish.com',
    }),
  })

  const result = await response.json()
  if (!result.success) {
    throw new Error(result.error || 'Failed to submit')
  }
  return result
}

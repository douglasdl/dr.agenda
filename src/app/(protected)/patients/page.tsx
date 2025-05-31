import { eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

import { db } from '@/db'
import { usersToClinicsTable } from '@/db/schema'
import { auth } from '@/lib/auth'

const PatientsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (!session?.user) {
    redirect('/authentication')
  }
  const clinics = await db.query.usersToClinicsTable.findMany({
    where: eq(usersToClinicsTable.userId, session.user.id),
  })
  if (clinics.length === 0) {
    redirect('/clinic-form')
  }
  return (
    <div>
      <h1>Pacientes</h1>
    </div>
  )
}

export default PatientsPage

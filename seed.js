const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  console.log("Starting seed");

  await prisma.prevision.createMany({
    data: [
      { name: "Fonasa" },
      { name: "Isapre" }
    ],
    skipDuplicates: true
  });

  await prisma.specialty.createMany({
    data: [
      { name: "Cardiología" },
      { name: "Dermatología" },
      { name: "Pediatría" },
      { name: "Neurología" },
      { name: "Traumatología" },
      { name: "Medicina General" },
      { name: "Urología" },
      { name: "Oftalmología" },
      { name: "Radiología" },
      { name: "Ginecología y Obstetricia" },
      { name: "Otorrinolaringología" }
    ],
    skipDuplicates: true
  });

  await prisma.medicalCenter.createMany({
    data: [
      { commune: "Santiago" },
      { commune: "Providencia" },
      { commune: "Las Condes" },
      { commune: "Ñuñoa" },
      { commune: "Maipú" },
      { commune: "La Florida" },
      { commune: "La Pintana" },
      { commune: "Macul" },
      { commune: "Puente Alto" },
      { commune: "San Bernardo" },
      { commune: "Huechuraba" }
    ],
    skipDuplicates: true
  });

  // =========================
  // 4. DOCTORS
  // =========================
  const doctors = [
    { name: 'Carlos', lastName: 'García', email: 'doctor1@gmail.com', password: 'password123', specialtyId: 1, centerId: 1 },
    { name: 'María', lastName: 'Fernández', email: 'doctor2@gmail.com', password: 'password123', specialtyId: 2, centerId: 2 },
    { name: 'Juan', lastName: 'López', email: 'doctor3@gmail.com', password: 'password123', specialtyId: 3, centerId: 3 },
    { name: 'Ana', lastName: 'Martínez', email: 'doctor4@gmail.com', password: 'password123', specialtyId: 4, centerId: 4 },
    { name: 'Luis', lastName: 'Sánchez', email: 'doctor5@gmail.com', password: 'password123', specialtyId: 5, centerId: 5 },
    { name: 'Antonio', lastName: 'Reiman', email: 'doctor6@gmail.com', password: 'password123', specialtyId: 3, centerId: 5 },
    { name: 'Laura', lastName: 'Pérez', email: 'doctor7@gmail.com', password: 'password123', specialtyId: 6, centerId: 5 },
    { name: 'Gustavo', lastName: 'Labraña', email: 'doctor8@gmail.com', password: 'password123', specialtyId: 7, centerId: 7 },
    { name: 'Josefa', lastName: 'Masferrer', email: 'doctor9@gmail.com', password: 'password123', specialtyId: 9, centerId: 8 },
    { name: 'Francisca', lastName: 'Díaz', email: 'doctor10@gmail.com', password: 'password123', specialtyId: 2, centerId: 3 },
    { name: 'Sofía', lastName: 'Pérez', email: 'doctor11@gmail.com', password: 'password123', specialtyId: 3, centerId: 9 },
    { name: 'Pablo', lastName: 'Torres', email: 'doctor12@gmail.com', password: 'password123', specialtyId: 5, centerId: 1 },
    { name: 'Daniel', lastName: 'Navarro', email: 'doctor13@gmail.com', password: 'password123', specialtyId: 6, centerId: 5 },
    { name: 'Valentina', lastName: 'Lautaro', email: 'doctor14@gmail.com', password: 'password123', specialtyId: 3, centerId: 6 },
    { name: 'Nora', lastName: 'Patiño', email: 'doctor15@gmail.com', password: 'password123', specialtyId: 5, centerId: 7 },
    { name: 'Maribel', lastName: 'Herrera', email: 'doctor16@gmail.com', password: 'password123', specialtyId: 3, centerId: 5 },
    { name: 'Karym', lastName: 'Vilches', email: 'doctor17@gmail.com', password: 'password123', specialtyId: 6, centerId: 3 },
    { name: 'Rodrigo', lastName: 'Leal', email: 'doctor18@gmail.com', password: 'password123', specialtyId: 5, centerId: 9 },
    { name: 'Javier', lastName: 'Carvajal', email: 'doctor19@gmail.com', password: 'password123', specialtyId: 7, centerId: 6 },
    { name: 'Camila', lastName: 'De souza', email: 'doctor20@gmail.com', password: 'password123', specialtyId: 8, centerId: 8 },
    { name: 'Camilo', lastName: 'Rojas', email: 'doctor21@gmail.com', password: 'password123', specialtyId: 9, centerId: 5 },
    { name: 'Sergio', lastName: 'Tapia', email: 'doctor22@gmail.com', password: 'password123', specialtyId: 6, centerId: 7 }
  ];

  const hashedDoctors = doctors.map(d => ({
    ...d,
    password: bcrypt.hashSync(d.password, 10)
  }));

  await prisma.doctor.createMany({
    data: hashedDoctors,
    skipDuplicates: true
  });

  // =========================
  // 5. PATIENTS
  // =========================
  await prisma.patient.createMany({
    data: [
      { rut: '11.111.111-1', name: 'Juan', lastName: 'Pérez', previsionId: 1 },
      { rut: '22.222.222-2', name: 'María', lastName: 'González', previsionId: 2 },
      { rut: '33.333.333-3', name: 'Carlos', lastName: 'Martínez', previsionId: 1 },
      { rut: '44.444.444-4', name: 'Ana', lastName: 'Hernández', previsionId: 2 },
      { rut: '55.555.555-5', name: 'Pedro', lastName: 'Soto', previsionId: 1 },
      { rut: '66.666.666-6', name: 'Luisa', lastName: 'Ramírez', previsionId: 2 },
      { rut: '77.777.777-7', name: 'Crstibal', lastName: 'Rojas', previsionId: 1 },
      { rut: '88.888.888-8', name: 'Fernado', lastName: 'Soto', previsionId: 2 },
      { rut: '99.999.999-9', name: 'Marcelo', lastName: 'Leal', previsionId: 1 },
      { rut: '00.000.000-0', name: 'Ana', lastName: 'Caserez', previsionId: 2 },
    ],
    skipDuplicates: true
  });

  console.log("✅ Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
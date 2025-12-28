import "../../styles/a4.css";

const Rough = () => {
  return (
    <>
      <div className="body A4">
        <section className="sheet p-4 flex flex-col">
          {/* main content */}
          <div className="main-content border-2 border-black h-full flex flex-col">
            {/* top header */}
            <div className="flex justify-between px-2">
              <div className="font-semibold">Estd. : 2017</div>
              <div className="grow font-semibold text-center">
                AN ISO 9001:2015 CERTIFIED SCHOOL
              </div>
              <div className="font-semibold">Reg. No. 054631</div>
            </div>
            {/* school header */}
            <div className="flex justify-between px-2 py-2">
              <div>
                <img width={84} src="assets/ama300.webp" alt="logo" />
              </div>
              <div className="grow flex flex-col text-center">
                <div className="font-semibold text-4xl font-[roboto,helvetica]">
                  Anshu Memorial Academy
                </div>
                <div className="font-semibold">
                  Bhatha Chowk, Bhatha Dasi, Rajapakar, Vaishali
                </div>
                <div className="text-sm">
                  Run &amp; Managed by AnitaBindeshwar Foundation (Regd. under
                  Company Act 2013)
                </div>
              </div>
              <div>
                <img
                  width={84}
                  src="assets/bbbp300.webp"
                  alt="beti bachao beti padhao"
                />
              </div>
            </div>

            <div>
              {/* name of exam */}
              <div>
                <div className="w-full text-center border-t-2 border-black">
                  <div>REPORT CARD [ANNUAL EXAMINATION]</div>
                  <div>SESSION 2023-2024</div>
                </div>
              </div>

              <div>
                <div className="w-full border-t-2 border-black py-2 px-4">
                  <div className="flex gap-x-2">
                    <div className="grow">
                      <table className="w-full text-left">
                        <tbody>
                          <tr>
                            <th className="px-3 py-2 whitespace-nowrap">
                              Name
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap">:</td>
                            <td className="px-3 py-2 whitespace-nowrap">
                              Priyanshu Kumari
                            </td>
                            <th className="px-3 py-2 whitespace-nowrap">
                              Class
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap">:</td>
                            <td className="px-3 py-2 whitespace-nowrap">
                              Std.2
                            </td>
                          </tr>
                          <tr>
                            <th className="px-3 py-2 whitespace-nowrap">
                              Mother's Name
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap">:</td>
                            <td className="px-3 py-2 whitespace-nowrap">
                              Rameshwar Paswan
                            </td>
                            <th className="px-3 py-2 whitespace-nowrap">
                              Roll No.
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap">:</td>
                            <td className="px-3 py-2 whitespace-nowrap">11</td>
                          </tr>
                          <tr>
                            <th className="px-3 py-2 whitespace-nowrap">
                              Father's Name
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap">:</td>
                            <td className="px-3 py-2 whitespace-nowrap">
                              Rina Devi
                            </td>
                            <th className="px-3 py-2 whitespace-nowrap">
                              Section
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap">:</td>
                            <td className="px-3 py-2 whitespace-nowrap">A</td>
                          </tr>
                          <tr>
                            <th className="px-3 py-2 whitespace-nowrap">
                              Date of Birth
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap">:</td>
                            <td className="px-3 py-2 whitespace-nowrap">
                              14-02-2019
                            </td>
                          </tr>
                          <tr>
                            <th className="px-3 py-2 whitespace-nowrap">
                              Address
                            </th>
                            <td className="px-3 py-2 whitespace-nowrap">:</td>
                            <td
                              className="px-3 py-2 whitespace-nowrap"
                              colSpan={4}
                            >
                              Bhatha Dasi, Rajapakar, Vaishali, Bihar
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div>
                      <div className="border-2 border-black w-37.5 h-45">
                        <img
                          src="assets/person.jpg"
                          className="w-full h-full aspect-4/3"
                          alt="student image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* marks section */}
              <div className="w-full border-y-2 py-2 border-black px-4">
                <div className="flex gap-5">
                  <table className="w-full table text-center">
                    <thead>
                      <tr className="border-b-2 border-black">
                        <th className="px-3 py-2 whitespace-nowrap text-left">
                          Subjects
                        </th>
                        <th className="px-3 py-2 whitespace-nowrap">
                          Full Marks
                        </th>
                        <th className="px-3 py-2 whitespace-nowrap">Written</th>
                        <th className="px-3 py-2 whitespace-nowrap">Oral</th>
                        <th className="px-3 py-2 whitespace-nowrap">Total</th>
                        <th className="px-3 py-2 whitespace-nowrap">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-300">
                        <th className="px-3 py-2 whitespace-nowrap text-left">
                          Hindi
                        </th>
                        <td className="px-3 py-2 whitespace-nowrap">100</td>
                        <td className="px-3 py-2 whitespace-nowrap">79</td>
                        <td className="px-3 py-2 whitespace-nowrap">--</td>
                        <td className="px-3 py-2 whitespace-nowrap">79</td>
                        <td className="px-3 py-2 whitespace-nowrap">B+</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <th className="px-3 py-2 whitespace-nowrap text-left">
                          English
                        </th>
                        <td className="px-3 py-2 whitespace-nowrap">100</td>
                        <td className="px-3 py-2 whitespace-nowrap">80</td>
                        <td className="px-3 py-2 whitespace-nowrap">--</td>
                        <td className="px-3 py-2 whitespace-nowrap">80</td>
                        <td className="px-3 py-2 whitespace-nowrap">B+</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <th className="px-3 py-2 whitespace-nowrap text-left">
                          Maths
                        </th>
                        <td className="px-3 py-2 whitespace-nowrap">100</td>
                        <td className="px-3 py-2 whitespace-nowrap">82</td>
                        <td className="px-3 py-2 whitespace-nowrap">--</td>
                        <td className="px-3 py-2 whitespace-nowrap">82</td>
                        <td className="px-3 py-2 whitespace-nowrap">A</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <th className="px-3 py-2 whitespace-nowrap text-left">
                          Science
                        </th>
                        <td className="px-3 py-2 whitespace-nowrap">100</td>
                        <td className="px-3 py-2 whitespace-nowrap">75</td>
                        <td className="px-3 py-2 whitespace-nowrap">15</td>
                        <td className="px-3 py-2 whitespace-nowrap">90</td>
                        <td className="px-3 py-2 whitespace-nowrap">A</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <th className="px-3 py-2 whitespace-nowrap text-left">
                          Social Science
                        </th>
                        <td className="px-3 py-2 whitespace-nowrap">100</td>
                        <td className="px-3 py-2 whitespace-nowrap">65</td>
                        <td className="px-3 py-2 whitespace-nowrap">14</td>
                        <td className="px-3 py-2 whitespace-nowrap">79</td>
                        <td className="px-3 py-2 whitespace-nowrap">B+</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <th className="px-3 py-2 whitespace-nowrap text-left">
                          Computer
                        </th>
                        <td className="px-3 py-2 whitespace-nowrap">100</td>
                        <td className="px-3 py-2 whitespace-nowrap">66</td>
                        <td className="px-3 py-2 whitespace-nowrap">--</td>
                        <td className="px-3 py-2 whitespace-nowrap">66</td>
                        <td className="px-3 py-2 whitespace-nowrap">B</td>
                      </tr>
                      <tr className="border-b border-gray-300">
                        <th className="px-3 py-2 whitespace-nowrap text-left">
                          General Knowledge
                        </th>
                        <td className="px-3 py-2 whitespace-nowrap">100</td>
                        <td className="px-3 py-2 whitespace-nowrap">62</td>
                        <td className="px-3 py-2 whitespace-nowrap">--</td>
                        <td className="px-3 py-2 whitespace-nowrap">62</td>
                        <td className="px-3 py-2 whitespace-nowrap">B</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="w-50">
                    <div className="w-full aspect-square border border-black">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width={150}
                        height={150}
                        viewBox="0 0 150 150"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={150}
                          height={150}
                          fill="#ffffff"
                        />
                        <g transform="scale(2.308)">
                          <g transform="translate(2,2)">
                            <path
                              fillRule="evenodd"
                              d="M8 0L8 1L9 1L9 0ZM10 0L10 2L8 2L8 5L9 5L9 6L8 6L8 7L9 7L9 6L10 6L10 8L8 8L8 9L7 9L7 8L6 8L6 9L7 9L7 10L6 10L6 11L8 11L8 12L5 12L5 13L4 13L4 14L3 14L3 12L4 12L4 11L5 11L5 9L4 9L4 8L0 8L0 11L1 11L1 12L0 12L0 13L1 13L1 12L2 12L2 15L0 15L0 17L3 17L3 18L2 18L2 20L1 20L1 21L0 21L0 23L1 23L1 24L0 24L0 25L1 25L1 26L0 26L0 30L1 30L1 29L2 29L2 31L0 31L0 32L3 32L3 33L1 33L1 34L2 34L2 35L1 35L1 37L0 37L0 39L1 39L1 40L0 40L0 43L1 43L1 41L2 41L2 39L3 39L3 38L2 38L2 35L3 35L3 33L5 33L5 34L6 34L6 35L5 35L5 36L3 36L3 37L4 37L4 40L3 40L3 42L2 42L2 43L4 43L4 44L3 44L3 47L2 47L2 48L1 48L1 47L0 47L0 48L1 48L1 49L2 49L2 51L0 51L0 53L4 53L4 52L5 52L5 51L9 51L9 50L10 50L10 52L9 52L9 53L8 53L8 52L6 52L6 53L8 53L8 54L9 54L9 57L8 57L8 61L9 61L9 60L10 60L10 59L11 59L11 61L14 61L14 60L15 60L15 58L16 58L16 57L15 57L15 58L14 58L14 59L13 59L13 60L12 60L12 58L11 58L11 57L12 57L12 55L11 55L11 54L12 54L12 52L13 52L13 51L14 51L14 50L12 50L12 51L11 51L11 50L10 50L10 49L9 49L9 48L6 48L6 49L4 49L4 48L3 48L3 47L7 47L7 46L8 46L8 45L7 45L7 44L11 44L11 45L10 45L10 46L9 46L9 47L10 47L10 48L11 48L11 47L12 47L12 49L14 49L14 48L13 48L13 46L12 46L12 44L14 44L14 43L15 43L15 44L17 44L17 46L16 46L16 45L14 45L14 47L15 47L15 46L16 46L16 47L17 47L17 48L18 48L18 50L19 50L19 51L21 51L21 50L22 50L22 48L23 48L23 51L24 51L24 52L23 52L23 53L24 53L24 52L25 52L25 51L27 51L27 52L26 52L26 54L28 54L28 57L29 57L29 58L31 58L31 57L32 57L32 58L33 58L33 52L34 52L34 50L33 50L33 49L34 49L34 48L33 48L33 49L32 49L32 45L31 45L31 46L30 46L30 45L29 45L29 44L30 44L30 43L31 43L31 44L33 44L33 43L35 43L35 44L34 44L34 45L35 45L35 46L36 46L36 48L35 48L35 49L37 49L37 48L38 48L38 47L37 47L37 46L38 46L38 45L40 45L40 46L41 46L41 47L42 47L42 48L41 48L41 49L44 49L44 48L45 48L45 49L46 49L46 47L47 47L47 49L48 49L48 51L47 51L47 50L46 50L46 51L44 51L44 50L42 50L42 52L41 52L41 50L39 50L39 49L40 49L40 48L39 48L39 49L38 49L38 51L40 51L40 52L38 52L38 53L40 53L40 52L41 52L41 53L43 53L43 54L42 54L42 55L41 55L41 54L39 54L39 55L40 55L40 56L37 56L37 55L38 55L38 54L37 54L37 53L34 53L34 57L35 57L35 58L34 58L34 60L33 60L33 59L29 59L29 60L31 60L31 61L32 61L32 60L33 60L33 61L38 61L38 60L36 60L36 58L38 58L38 57L39 57L39 59L40 59L40 60L41 60L41 57L42 57L42 60L44 60L44 59L43 59L43 57L42 57L42 55L43 55L43 54L44 54L44 53L45 53L45 52L46 52L46 55L48 55L48 56L49 56L49 58L50 58L50 59L48 59L48 57L47 57L47 56L45 56L45 55L44 55L44 56L45 56L45 57L44 57L44 58L45 58L45 61L51 61L51 60L50 60L50 59L51 59L51 58L50 58L50 56L51 56L51 57L52 57L52 58L53 58L53 57L56 57L56 58L55 58L55 61L56 61L56 59L57 59L57 58L58 58L58 60L57 60L57 61L61 61L61 60L59 60L59 59L60 59L60 58L61 58L61 56L59 56L59 57L60 57L60 58L58 58L58 56L57 56L57 54L59 54L59 55L61 55L61 51L60 51L60 54L59 54L59 52L53 52L53 51L54 51L54 50L56 50L56 51L57 51L57 48L58 48L58 50L60 50L60 49L61 49L61 48L60 48L60 45L58 45L58 43L56 43L56 44L55 44L55 42L54 42L54 45L53 45L53 44L52 44L52 42L50 42L50 41L51 41L51 40L52 40L52 41L54 41L54 40L52 40L52 39L54 39L54 37L55 37L55 38L57 38L57 39L56 39L56 40L55 40L55 41L57 41L57 39L59 39L59 40L58 40L58 42L60 42L60 43L61 43L61 41L59 41L59 40L61 40L61 39L60 39L60 38L61 38L61 37L60 37L60 38L59 38L59 37L58 37L58 36L59 36L59 35L58 35L58 34L57 34L57 35L58 35L58 36L56 36L56 33L57 33L57 32L58 32L58 31L59 31L59 32L60 32L60 33L59 33L59 34L61 34L61 29L60 29L60 28L61 28L61 27L60 27L60 25L61 25L61 23L58 23L58 20L57 20L57 22L56 22L56 23L57 23L57 25L56 25L56 24L55 24L55 25L56 25L56 26L54 26L54 28L52 28L52 27L53 27L53 26L52 26L52 25L53 25L53 24L51 24L51 23L47 23L47 22L50 22L50 21L51 21L51 20L54 20L54 22L52 22L52 23L55 23L55 19L57 19L57 18L58 18L58 19L59 19L59 20L60 20L60 19L61 19L61 17L60 17L60 16L61 16L61 15L60 15L60 16L57 16L57 15L58 15L58 14L59 14L59 13L60 13L60 14L61 14L61 13L60 13L60 12L61 12L61 11L60 11L60 12L59 12L59 11L57 11L57 10L59 10L59 8L56 8L56 9L57 9L57 10L56 10L56 12L58 12L58 13L56 13L56 14L57 14L57 15L56 15L56 16L54 16L54 15L55 15L55 14L52 14L52 16L51 16L51 15L49 15L49 14L51 14L51 13L52 13L52 12L53 12L53 13L55 13L55 12L53 12L53 10L54 10L54 11L55 11L55 9L54 9L54 8L53 8L53 10L51 10L51 11L48 11L48 10L50 10L50 9L51 9L51 5L52 5L52 4L53 4L53 0L51 0L51 2L50 2L50 0L47 0L47 1L45 1L45 0L44 0L44 1L45 1L45 2L44 2L44 3L45 3L45 4L43 4L43 5L42 5L42 4L41 4L41 5L42 5L42 7L41 7L41 6L40 6L40 9L39 9L39 10L40 10L40 11L39 11L39 12L40 12L40 11L41 11L41 8L42 8L42 7L43 7L43 5L44 5L44 7L45 7L45 6L46 6L46 8L48 8L48 7L49 7L49 6L50 6L50 9L47 9L47 11L48 11L48 12L45 12L45 10L46 10L46 9L44 9L44 8L43 8L43 9L42 9L42 11L43 11L43 9L44 9L44 12L45 12L45 13L48 13L48 14L47 14L47 15L49 15L49 16L50 16L50 17L51 17L51 18L50 18L50 19L48 19L48 17L47 17L47 16L46 16L46 15L45 15L45 14L44 14L44 13L43 13L43 14L42 14L42 13L41 13L41 14L40 14L40 13L38 13L38 12L37 12L37 11L38 11L38 10L34 10L34 12L33 12L33 8L34 8L34 7L35 7L35 9L36 9L36 7L37 7L37 5L38 5L38 8L37 8L37 9L38 9L38 8L39 8L39 5L40 5L40 4L39 4L39 3L38 3L38 2L37 2L37 0L36 0L36 2L35 2L35 1L34 1L34 3L36 3L36 4L35 4L35 6L34 6L34 7L33 7L33 5L34 5L34 4L32 4L32 3L33 3L33 0L31 0L31 2L32 2L32 3L31 3L31 4L30 4L30 3L28 3L28 7L27 7L27 6L26 6L26 4L25 4L25 5L24 5L24 7L23 7L23 4L22 4L22 5L21 5L21 2L22 2L22 3L25 3L25 1L24 1L24 0L23 0L23 2L22 2L22 0L21 0L21 2L19 2L19 3L18 3L18 5L17 5L17 6L16 6L16 7L15 7L15 6L14 6L14 5L13 5L13 4L14 4L14 3L13 3L13 2L12 2L12 3L13 3L13 4L11 4L11 3L10 3L10 2L11 2L11 0ZM12 0L12 1L14 1L14 2L16 2L16 3L15 3L15 5L16 5L16 4L17 4L17 2L16 2L16 0L15 0L15 1L14 1L14 0ZM29 0L29 1L28 1L28 2L30 2L30 0ZM39 0L39 1L41 1L41 2L42 2L42 3L43 3L43 2L42 2L42 1L43 1L43 0L42 0L42 1L41 1L41 0ZM26 1L26 3L27 3L27 1ZM48 1L48 2L49 2L49 1ZM46 2L46 3L47 3L47 4L45 4L45 5L46 5L46 6L47 6L47 7L48 7L48 6L49 6L49 5L47 5L47 4L48 4L48 3L47 3L47 2ZM51 3L51 4L52 4L52 3ZM10 4L10 6L11 6L11 7L12 7L12 6L11 6L11 4ZM19 5L19 7L20 7L20 8L19 8L19 10L18 10L18 9L17 9L17 8L16 8L16 10L15 10L15 12L14 12L14 9L15 9L15 8L14 8L14 6L13 6L13 8L14 8L14 9L13 9L13 10L12 10L12 8L11 8L11 9L10 9L10 10L9 10L9 9L8 9L8 11L9 11L9 12L10 12L10 13L11 13L11 14L10 14L10 15L9 15L9 14L8 14L8 15L6 15L6 16L5 16L5 15L4 15L4 16L5 16L5 17L4 17L4 19L3 19L3 24L4 24L4 25L2 25L2 24L1 24L1 25L2 25L2 27L1 27L1 28L2 28L2 29L4 29L4 28L5 28L5 27L4 27L4 28L3 28L3 26L4 26L4 25L5 25L5 24L7 24L7 25L6 25L6 26L7 26L7 25L8 25L8 23L9 23L9 22L11 22L11 23L12 23L12 24L11 24L11 25L12 25L12 24L13 24L13 25L14 25L14 28L16 28L16 29L17 29L17 30L16 30L16 31L15 31L15 30L14 30L14 31L15 31L15 32L17 32L17 33L16 33L16 35L15 35L15 34L14 34L14 35L13 35L13 34L12 34L12 33L14 33L14 32L13 32L13 31L11 31L11 29L12 29L12 28L13 28L13 26L12 26L12 27L11 27L11 29L9 29L9 30L10 30L10 31L11 31L11 32L12 32L12 33L11 33L11 34L12 34L12 36L9 36L9 34L10 34L10 33L9 33L9 34L8 34L8 35L6 35L6 36L5 36L5 39L6 39L6 40L7 40L7 41L4 41L4 42L5 42L5 44L4 44L4 46L7 46L7 45L5 45L5 44L7 44L7 43L6 43L6 42L8 42L8 41L9 41L9 42L11 42L11 41L12 41L12 38L14 38L14 39L13 39L13 40L15 40L15 38L14 38L14 37L15 37L15 36L16 36L16 35L17 35L17 36L18 36L18 35L17 35L17 33L18 33L18 34L19 34L19 33L20 33L20 35L21 35L21 36L19 36L19 37L21 37L21 38L22 38L22 39L21 39L21 40L22 40L22 41L20 41L20 43L17 43L17 44L18 44L18 47L19 47L19 49L20 49L20 48L21 48L21 47L23 47L23 46L21 46L21 45L20 45L20 43L21 43L21 42L23 42L23 40L25 40L25 41L24 41L24 42L25 42L25 46L26 46L26 45L27 45L27 47L26 47L26 49L25 49L25 48L24 48L24 51L25 51L25 50L27 50L27 51L28 51L28 52L27 52L27 53L28 53L28 52L30 52L30 51L31 51L31 52L33 52L33 51L31 51L31 50L32 50L32 49L31 49L31 50L30 50L30 51L29 51L29 50L27 50L27 49L28 49L28 48L29 48L29 47L30 47L30 48L31 48L31 47L30 47L30 46L29 46L29 47L28 47L28 44L29 44L29 43L30 43L30 42L32 42L32 41L35 41L35 40L36 40L36 42L35 42L35 43L37 43L37 44L36 44L36 46L37 46L37 45L38 45L38 43L39 43L39 44L40 44L40 43L41 43L41 46L42 46L42 47L45 47L45 46L44 46L44 45L46 45L46 46L47 46L47 43L50 43L50 42L48 42L48 41L49 41L49 39L50 39L50 40L51 40L51 39L52 39L52 38L53 38L53 37L54 37L54 36L53 36L53 35L55 35L55 33L54 33L54 34L52 34L52 31L51 31L51 32L50 32L50 30L51 30L51 29L52 29L52 28L51 28L51 27L52 27L52 26L51 26L51 27L50 27L50 26L49 26L49 25L51 25L51 24L49 24L49 25L48 25L48 24L47 24L47 23L46 23L46 22L47 22L47 20L48 20L48 21L50 21L50 20L51 20L51 19L50 19L50 20L48 20L48 19L47 19L47 20L46 20L46 19L45 19L45 18L44 18L44 16L43 16L43 15L41 15L41 16L40 16L40 14L39 14L39 17L38 17L38 18L40 18L40 19L39 19L39 20L40 20L40 19L42 19L42 20L41 20L41 22L40 22L40 21L38 21L38 19L37 19L37 20L35 20L35 21L34 21L34 20L33 20L33 21L34 21L34 22L35 22L35 24L34 24L34 23L33 23L33 24L31 24L31 23L32 23L32 19L34 19L34 18L32 18L32 19L31 19L31 17L33 17L33 15L35 15L35 16L34 16L34 17L37 17L37 14L35 14L35 13L32 13L32 12L31 12L31 10L30 10L30 9L28 9L28 8L25 8L25 7L26 7L26 6L25 6L25 7L24 7L24 8L23 8L23 7L22 7L22 6L21 6L21 7L20 7L20 5ZM29 5L29 8L32 8L32 5ZM17 6L17 7L18 7L18 6ZM30 6L30 7L31 7L31 6ZM35 6L35 7L36 7L36 6ZM52 6L52 7L53 7L53 6ZM22 8L22 9L21 9L21 10L19 10L19 12L17 12L17 11L16 11L16 12L15 12L15 14L14 14L14 16L13 16L13 13L14 13L14 12L12 12L12 11L11 11L11 12L12 12L12 15L10 15L10 16L9 16L9 17L7 17L7 16L6 16L6 17L5 17L5 19L4 19L4 20L5 20L5 22L4 22L4 23L5 23L5 22L6 22L6 23L8 23L8 22L6 22L6 21L8 21L8 20L5 20L5 19L7 19L7 18L10 18L10 19L11 19L11 22L12 22L12 23L13 23L13 24L14 24L14 25L15 25L15 24L16 24L16 25L17 25L17 24L18 24L18 25L19 25L19 26L18 26L18 28L21 28L21 29L22 29L22 28L23 28L23 29L27 29L27 30L28 30L28 31L27 31L27 32L28 32L28 34L29 34L29 37L30 37L30 38L31 38L31 39L30 39L30 40L31 40L31 41L32 41L32 39L33 39L33 37L35 37L35 39L36 39L36 37L37 37L37 36L38 36L38 38L37 38L37 39L38 39L38 40L37 40L37 42L38 42L38 41L40 41L40 42L41 42L41 43L42 43L42 44L43 44L43 43L44 43L44 41L45 41L45 44L46 44L46 43L47 43L47 41L48 41L48 40L47 40L47 39L48 39L48 37L49 37L49 38L50 38L50 39L51 39L51 37L53 37L53 36L52 36L52 34L51 34L51 35L50 35L50 33L48 33L48 32L49 32L49 31L47 31L47 30L48 30L48 29L46 29L46 32L45 32L45 33L41 33L41 32L44 32L44 30L45 30L45 28L46 28L46 27L47 27L47 26L48 26L48 25L47 25L47 24L45 24L45 26L44 26L44 23L45 23L45 22L46 22L46 21L45 21L45 22L44 22L44 20L43 20L43 21L42 21L42 24L43 24L43 26L42 26L42 25L41 25L41 26L42 26L42 28L41 28L41 27L39 27L39 26L40 26L40 23L39 23L39 24L36 24L36 25L35 25L35 27L34 27L34 25L32 25L32 26L31 26L31 25L27 25L27 27L28 27L28 26L30 26L30 27L29 27L29 28L24 28L24 27L26 27L26 25L25 25L25 26L24 26L24 27L23 27L23 26L20 26L20 25L19 25L19 24L18 24L18 22L19 22L19 23L20 23L20 24L21 24L21 22L20 22L20 21L22 21L22 22L23 22L23 23L22 23L22 24L24 24L24 22L25 22L25 24L26 24L26 22L27 22L27 21L26 21L26 20L25 20L25 19L23 19L23 20L22 20L22 19L21 19L21 18L23 18L23 17L24 17L24 16L25 16L25 18L26 18L26 19L28 19L28 18L27 18L27 15L28 15L28 14L26 14L26 15L24 15L24 16L23 16L23 17L21 17L21 18L20 18L20 16L19 16L19 15L20 15L20 14L22 14L22 15L23 15L23 13L21 13L21 12L24 12L24 13L25 13L25 12L27 12L27 13L29 13L29 16L30 16L30 17L31 17L31 15L32 15L32 13L31 13L31 12L30 12L30 13L29 13L29 11L30 11L30 10L28 10L28 11L25 11L25 12L24 12L24 11L21 11L21 10L25 10L25 8L24 8L24 9L23 9L23 8ZM60 8L60 9L61 9L61 8ZM1 9L1 10L4 10L4 9ZM26 9L26 10L27 10L27 9ZM20 11L20 12L21 12L21 11ZM35 11L35 12L36 12L36 11ZM51 11L51 12L52 12L52 11ZM49 12L49 13L50 13L50 12ZM5 13L5 14L7 14L7 13ZM16 13L16 14L15 14L15 15L16 15L16 16L14 16L14 19L13 19L13 18L12 18L12 17L13 17L13 16L10 16L10 18L12 18L12 19L13 19L13 20L12 20L12 22L14 22L14 23L15 23L15 22L16 22L16 23L17 23L17 22L18 22L18 21L19 21L19 20L20 20L20 19L18 19L18 18L17 18L17 16L18 16L18 17L19 17L19 16L18 16L18 15L19 15L19 14L20 14L20 13L19 13L19 14L17 14L17 13ZM30 13L30 14L31 14L31 13ZM2 15L2 16L3 16L3 15ZM41 16L41 17L40 17L40 18L42 18L42 17L43 17L43 16ZM45 16L45 17L46 17L46 16ZM6 17L6 18L7 18L7 17ZM15 17L15 19L14 19L14 21L15 21L15 20L18 20L18 19L17 19L17 18L16 18L16 17ZM53 17L53 19L55 19L55 18L56 18L56 17ZM59 17L59 18L60 18L60 17ZM0 18L0 19L1 19L1 18ZM29 18L29 20L28 20L28 23L27 23L27 24L29 24L29 23L31 23L31 22L29 22L29 20L30 20L30 21L31 21L31 20L30 20L30 18ZM9 20L9 21L10 21L10 20ZM1 21L1 22L2 22L2 21ZM25 21L25 22L26 22L26 21ZM36 21L36 22L37 22L37 23L38 23L38 22L37 22L37 21ZM43 22L43 23L44 23L44 22ZM59 24L59 25L58 25L58 27L57 27L57 26L56 26L56 27L57 27L57 31L58 31L58 28L60 28L60 27L59 27L59 25L60 25L60 24ZM36 25L36 26L37 26L37 27L36 27L36 28L34 28L34 27L33 27L33 26L32 26L32 28L33 28L33 30L34 30L34 29L37 29L37 30L36 30L36 31L37 31L37 32L36 32L36 33L35 33L35 31L33 31L33 32L34 32L34 33L32 33L32 36L31 36L31 38L32 38L32 37L33 37L33 36L36 36L36 34L38 34L38 35L39 35L39 37L42 37L42 38L44 38L44 39L43 39L43 40L42 40L42 39L41 39L41 40L40 40L40 41L41 41L41 42L42 42L42 43L43 43L43 40L44 40L44 39L45 39L45 40L46 40L46 41L47 41L47 40L46 40L46 39L47 39L47 36L48 36L48 35L49 35L49 36L50 36L50 37L51 37L51 36L50 36L50 35L49 35L49 34L47 34L47 33L46 33L46 34L43 34L43 35L42 35L42 36L41 36L41 35L39 35L39 34L41 34L41 33L40 33L40 32L39 32L39 33L37 33L37 32L38 32L38 30L39 30L39 31L40 31L40 29L41 29L41 31L43 31L43 30L44 30L44 29L41 29L41 28L40 28L40 29L39 29L39 28L37 28L37 27L38 27L38 25ZM46 25L46 26L45 26L45 27L46 27L46 26L47 26L47 25ZM9 26L9 27L10 27L10 26ZM15 26L15 27L16 27L16 26ZM43 26L43 28L44 28L44 26ZM6 27L6 28L7 28L7 27ZM21 27L21 28L22 28L22 27ZM49 28L49 29L50 29L50 28ZM5 29L5 32L8 32L8 29ZM18 29L18 30L17 30L17 31L19 31L19 30L20 30L20 31L21 31L21 30L20 30L20 29ZM29 29L29 32L32 32L32 29ZM53 29L53 32L56 32L56 29ZM59 29L59 31L60 31L60 29ZM6 30L6 31L7 31L7 30ZM22 30L22 32L20 32L20 33L21 33L21 35L22 35L22 32L24 32L24 31L25 31L25 30ZM30 30L30 31L31 31L31 30ZM54 30L54 31L55 31L55 30ZM6 33L6 34L7 34L7 33ZM24 33L24 34L23 34L23 36L24 36L24 34L26 34L26 35L25 35L25 36L26 36L26 35L27 35L27 33ZM29 33L29 34L30 34L30 35L31 35L31 33ZM34 34L34 35L35 35L35 34ZM46 34L46 36L45 36L45 35L44 35L44 36L45 36L45 37L46 37L46 36L47 36L47 34ZM14 35L14 36L15 36L15 35ZM60 35L60 36L61 36L61 35ZM6 36L6 37L7 37L7 36ZM8 36L8 38L9 38L9 40L10 40L10 41L11 41L11 40L10 40L10 39L11 39L11 38L12 38L12 37L10 37L10 38L9 38L9 36ZM27 36L27 38L26 38L26 37L25 37L25 38L24 38L24 39L26 39L26 41L25 41L25 42L27 42L27 43L29 43L29 42L28 42L28 41L27 41L27 40L28 40L28 39L27 39L27 38L28 38L28 36ZM55 36L55 37L56 37L56 36ZM16 37L16 38L18 38L18 37ZM22 37L22 38L23 38L23 37ZM1 38L1 39L2 39L2 38ZM6 38L6 39L7 39L7 38ZM39 38L39 39L40 39L40 38ZM45 38L45 39L46 39L46 38ZM17 39L17 42L19 42L19 41L18 41L18 40L20 40L20 39ZM41 40L41 41L42 41L42 40ZM13 41L13 42L14 42L14 41ZM15 41L15 43L16 43L16 41ZM22 43L22 44L23 44L23 45L24 45L24 44L23 44L23 43ZM0 44L0 45L1 45L1 44ZM48 44L48 47L49 47L49 45L50 45L50 48L51 48L51 46L52 46L52 48L53 48L53 47L57 47L57 45L55 45L55 46L52 46L52 44ZM42 45L42 46L43 46L43 45ZM10 46L10 47L11 47L11 46ZM19 46L19 47L20 47L20 46ZM33 46L33 47L34 47L34 46ZM58 46L58 47L59 47L59 46ZM27 47L27 48L28 48L28 47ZM2 48L2 49L3 49L3 48ZM15 48L15 50L17 50L17 49L16 49L16 48ZM6 49L6 50L7 50L7 49ZM51 49L51 51L50 51L50 50L49 50L49 51L48 51L48 52L47 52L47 51L46 51L46 52L47 52L47 53L48 53L48 54L51 54L51 53L52 53L52 50L54 50L54 49ZM35 50L35 52L36 52L36 50ZM3 51L3 52L4 52L4 51ZM16 51L16 53L15 53L15 54L16 54L16 55L17 55L17 52L18 52L18 51ZM20 52L20 53L18 53L18 55L19 55L19 57L17 57L17 59L18 59L18 61L19 61L19 59L18 59L18 58L21 58L21 59L20 59L20 61L21 61L21 59L23 59L23 58L27 58L27 57L26 57L26 56L27 56L27 55L26 55L26 56L24 56L24 55L23 55L23 56L22 56L22 54L21 54L21 57L20 57L20 55L19 55L19 54L20 54L20 53L21 53L21 52ZM43 52L43 53L44 53L44 52ZM50 52L50 53L51 53L51 52ZM9 53L9 54L11 54L11 53ZM13 53L13 56L15 56L15 55L14 55L14 53ZM29 53L29 56L32 56L32 53ZM53 53L53 56L56 56L56 53ZM30 54L30 55L31 55L31 54ZM35 54L35 57L37 57L37 56L36 56L36 54ZM54 54L54 55L55 55L55 54ZM49 55L49 56L50 56L50 55ZM51 55L51 56L52 56L52 55ZM23 56L23 57L24 57L24 56ZM9 57L9 59L10 59L10 57ZM21 57L21 58L22 58L22 57ZM45 57L45 58L47 58L47 57ZM53 59L53 60L54 60L54 59ZM16 60L16 61L17 61L17 60ZM25 60L25 61L26 61L26 60ZM0 0L0 7L7 7L7 0ZM1 1L1 6L6 6L6 1ZM2 2L2 5L5 5L5 2ZM54 0L54 7L61 7L61 0ZM55 1L55 6L60 6L60 1ZM56 2L56 5L59 5L59 2ZM0 54L0 61L7 61L7 54ZM1 55L1 60L6 60L6 55ZM2 56L2 59L5 59L5 56Z"
                              fill="#000000"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <table className="border border-black mt-2 text-xs w-full text-left">
                        <tbody>
                          <tr>
                            <th
                              className="border border-black px-1 text-center"
                              colSpan={2}
                            >
                              Grading System
                            </th>
                          </tr>
                          <tr>
                            <th className="border border-black px-1">A+</th>
                            <td className="border border-black px-1">
                              91%-100%
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-black px-1">A</th>
                            <td className="border border-black px-1">
                              81%-90%
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-black px-1">B+</th>
                            <td className="border border-black px-1">
                              71%-80%
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-black px-1">B</th>
                            <td className="border border-black px-1">
                              61%-70%
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-black px-1">C+</th>
                            <td className="border border-black px-1">
                              51%-60%
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-black px-1">C</th>
                            <td className="border border-black px-1">
                              41%-50%
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-black px-1">D</th>
                            <td className="border border-black px-1">
                              33%-50%
                            </td>
                          </tr>
                          <tr>
                            <th className="border border-black px-1">E</th>
                            <td className="border border-black px-1">
                              Less than 33%
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* overall result */}
              <div className="px-4 py-2">
                <table className="border border-black w-full text-center">
                  <tbody>
                    <tr>
                      <th className="border border-black px-3 py-2">
                        Obtained Marks
                      </th>
                      <th className="border border-black px-3 py-2">
                        Obtained Marks %
                      </th>
                      <th className="border border-black px-3 py-2">
                        Attendance
                      </th>
                      <th className="border border-black px-3 py-2">Grade</th>
                      <th className="border border-black px-3 py-2">
                        Position in Class
                      </th>
                    </tr>
                    <tr>
                      <td className="border border-black px-3 py-2">538/700</td>
                      <td className="border border-black px-3 py-2">76.86%</td>
                      <td className="border border-black px-3 py-2">--</td>
                      <td className="border border-black px-3 py-2">B+</td>
                      <td className="border border-black px-3 py-2">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* remarks */}
              <div>
                <div className="px-4">
                  <span className="font-semibold"> Remarks : </span>
                  <span> Result is better Need improve &amp; keep it up. </span>
                </div>
              </div>
            </div>
            {/* space filler */}
            <div className="w-full grow" />
            {/* bottom */}
            <div className="flex">
              <div className="w-full flex justify-around p-2 items-end">
                <div className="font-semibold px-5">
                  <div className="flex flex-col text-center">
                    <div>18-05-2024</div>
                    <div className="border-t-2 border-dashed border-black">
                      Date
                    </div>
                  </div>
                </div>
                <div className="font-semibold px-5">
                  <div className="flex flex-col text-center">
                    <div>
                      <img src="assets/mukul-sign.webp" />
                    </div>
                    <div className="border-t-2 border-dashed border-black">
                      Class Teacher
                    </div>
                  </div>
                </div>
                <div className="font-semibold px-5">
                  <div className="flex flex-col text-center">
                    <div className="w-48">
                      <img src="assets/principal_seal400.webp" />
                    </div>
                    <div className="border-t-2 border-dashed border-black">
                      Director/Principal
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-red-100 aspect-square w-50" hidden />
            </div>
            {/* footer school contact */}
            <div>
              <div className="bg-green-700 text-white px-1 py-px flex justify-between border-t-2 border-black">
                <div className="flex">
                  <svg
                    className="size-6 text-white m-auto mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                    />
                  </svg>
                  <a className="my-auto" href="tel:+919128289100">
                    {" "}
                    9128289100
                  </a>
                </div>
                <div className="flex">
                  <svg
                    className="size-5 text-white my-auto mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                      clipRule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                    />
                  </svg>
                  <a
                    href="https://wa.me/919973757920?text=Hi%20I%20need%20help"
                    className="my-auto"
                  >
                    9973757920
                  </a>
                </div>
                <div className="flex">
                  <span className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 my-auto mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                    <a href="/cdn-cgi/l/email-protection#71101f0219041c141c1e0318101d31161c10181d5f121e1c">
                      <span
                        className="__cf_email__"
                        data-cfemail="ed8c839e8598808880829f848c81ad8a808c8481c38e8280"
                      >
                        [email&nbsp;protected]
                      </span>
                    </a>
                  </span>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="size-5 fill-white my-auto mr-1"
                  >
                    <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" />
                  </svg>
                  <a href="https://anshumemorial.in">www.anshumemorial.in</a>
                </div>
              </div>
            </div>
          </div>
          {/* credit parts */}
          <div className="w-full text-center text-xs py-1 bg-gray-100">
            Designed &amp; Developed by
            <a
              className="text-blue-600 font-semibold"
              href="https://skwebs.github.io"
            >
              Anshu Memorial Academy (IT Team)
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Rough;

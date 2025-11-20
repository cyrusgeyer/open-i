from docx import Document

doc = Document("Student Industry Programs.docx")

current_program = None
programs = []

for para in doc.paragraphs:
    text = para.text.strip()
    if not text:
        continue

    # Check if it's a program title (usually bold and larger)
    if para.runs and para.runs[0].bold and len(text) > 10:
        if current_program:
            programs.append(current_program)
        current_program = {"title": text, "content": []}
    elif current_program:
        current_program["content"].append(text)

# Add last program
if current_program:
    programs.append(current_program)

# Print all content for each program
for program in programs:
    print(f"\n{'='*80}")
    print(f"PROGRAM: {program['title']}")
    print(f"{'='*80}")
    for line in program["content"]:
        print(line)
    print()

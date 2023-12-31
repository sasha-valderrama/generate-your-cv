import styled from '@emotion/styled';
import React from 'react';
import { TbPoint } from 'react-icons/tb';
import { centerContentInColumn, defaultInput } from '../../ui/styles/utilities';
import RemoveEditor from '../../ui/RemoveEditor';

export default function Skill({ skill, onChangeSkills, onRemoveSkill }) {
  return (
    <SkillsWrapper>
      <div>
        <TbPoint />
        <SkillItem
          type="text"
          id={skill.id}
          name={skill.name}
          value={skill.name}
          onChange={(e) => onChangeSkills(e.target.value, skill.id)}
          placeholder="Enter a Hard or Soft skill"
        />
      </div>
      <RemoveEditor
        item={skill}
        onRemoveItem={onRemoveSkill}
      />
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  position: relative;
  ${centerContentInColumn};
  width: fit-content;
  height: fit-content;
  gap: 0.3rem;
`;

const SkillItem = styled(defaultInput)`
  width: 250px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: ${(props) => (props.left ? 'bold' : 'normal')};
  font-family: ${(props) => props.theme.fontFamily.monospace};
  line-height: 1.5;
`;
